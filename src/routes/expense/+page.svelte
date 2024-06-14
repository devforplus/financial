<script lang="ts">
  import { totalNumberStore } from "$lib/components/store";
  import { Button } from "flowbite-svelte";
  import { DateInput } from "date-picker-svelte";
  type Tag = "월급" | "용돈" | "기타";

  interface Data {
    /** 생성 시간 */
    date: any;
    /** 액수 */
    money: number;
    tag: Tag;
    /** 비고 */
    description: string;
    /**총 금액*/
    totalmoney: number;
  }

  let date = new Date();
  let datas: Data[] = [];
  let selectedOption: "" | "월급" | "용돈" | "기타" = ""; // 선택된 옵션을 저장할 변수
  let incomeNumber: number;
  let totalNumber = $totalNumberStore;

  // 컴포넌트가 처음 로드될 때 실행되는 함수
  // onMount(() => {
  //   totalNumberStore.set(0); // totalNumber 초기화
  //   totalNumber = 0;
  // });

  //수입 지출 계산하는 함수
  function calculate() {
    totalNumber -= incomeNumber;
    totalNumberStore.set(totalNumber);
  }

  // 선택된 옵션과 현재 날짜 및 시간을 배열에 추가하는 함수
  function addSelectedOption() {
    // 정수 여부 검증
    if (!Number.isSafeInteger(incomeNumber)) {
      window.alert("수익을 숫자로 입력해주세요!");
      return;
    }

    if (selectedOption.length === 0) {
      window.alert("옵션을 선택해주세요!");
      return;
    }

    datas = [
      ...datas,
      {
        date: date,
        description: "",
        tag: selectedOption || "기타",
        money: incomeNumber,
        totalmoney: totalNumber,
      },
    ];
    calculate();

    selectedOption = ""; // 선택 필드 초기화
  }
</script>

<div class="mx-16">
  <div class="input-group">
    <DateInput bind:value={date}></DateInput>
    <input type="number" placeholder="지출 금액" bind:value={incomeNumber} />
    <select bind:value={selectedOption}>
      <option value="" disabled>옵션 선택</option>
      <option value="월급">식사</option>
      <option value="용돈">교통</option>
      <option value="기타">기타</option>
    </select>
    <Button color="blue" on:click={addSelectedOption}>추가</Button>
  </div>
  <ul>
    {#each datas as { date, description, tag, money, totalmoney }}
      <li>
        <p>{date} : 지출 {money}원 {tag} {description} 총액 : {totalmoney}</p>
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
