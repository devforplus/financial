<script lang="ts">
  import moment from "moment";
  import { onMount } from "svelte";
  import { Button, Datepicker } from "flowbite-svelte";

  import {
    ExpenseTagSchema,
    IncomeTagSchema,
    MiscTagSchema,
    type ExpenseTag,
    type IncomeTag,
    type MiscTag,
  } from "$lib/schemas";
  import { recordHandler } from "$lib/store/records";

  /** Moment.js 사용을 위한 날짜 스키마 */
  const DATE_SCHEMA = "yyyy/MM/DD";
  // 기본값: 현재 날짜를 DATE_SCHEMA에 맞게 포메팅한 문자열
  let dates: string[] = [];

  let selectedOption: IncomeTag | ExpenseTag | MiscTag | "" = ""; // 선택된 옵션을 저장할 변수
  /**
   * ### `input` 태그에 입력된 숫자 값
   *
   * 소득, 지출 여부를 아직 모름
   */
  let inputNumber = 0;

  onMount(() => {
    dates = [moment().format(DATE_SCHEMA)];
  });

  // 선택된 옵션과 현재 날짜 및 시간을 배열에 추가하는 함수
  function addSelectedOption() {
    // 정수 여부 검증
    if (!Number.isSafeInteger(inputNumber)) {
      window.alert("수익을 숫자로 입력해주세요!");
      return;
    }

    if (selectedOption.length === 0) {
      window.alert("옵션을 선택해주세요!");
      return;
    }

    recordHandler.add({
      // `DATE_SCHEMA`에 따라서 포메팅된 문자열을 사용
      date: moment().format(DATE_SCHEMA),
      description: "",
      tag: selectedOption || "미분류",
      money: inputNumber,
      pre_balance: 0,
    });

    selectedOption = ""; // 선택 필드 초기화
  }
</script>

<div class="mx-16">
  <div class="input-group">
    <Datepicker
      datepickerButtons={true}
      datepickerFormat={"yyyy/mm/dd"}
      bind:values={dates}
    />
    <input type="number" placeholder="수입 금액" bind:value={inputNumber} />
    <select bind:value={selectedOption}>
      <option value="" disabled>옵션 선택</option>
      <!-- 수입 옵션들 -->
      {#each Object.values(IncomeTagSchema.Values) as item}
        <option value={item}>{item}</option>
      {/each}
      <!-- 지출 옵션들 -->
      {#each Object.values(ExpenseTagSchema.Values) as item}
        <option value={item}>{item}</option>
      {/each}
      <!-- 미분류 옵션들 -->
      {#each Object.values(MiscTagSchema.Values) as item}
        <option value={item}>{item}</option>
      {/each}
    </select>
    <Button color="blue" on:click={addSelectedOption}>추가</Button>
  </div>
  <ul>
    {#each $recordHandler as { date, description, tag, money, pre_balance }}
      <li>
        <p>{date} : {money}원 {tag} {description} 잔액 : {pre_balance}</p>
      </li>
    {/each}
  </ul>
</div>

<style>
  .input-group {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .input-group > * {
    margin: 0;
  }
</style>
