<script lang="ts">
  import { Button, Tabs, TabItem } from "flowbite-svelte";
  import { DatePicker } from "@svelte-plugins/datepicker";
  import { format } from "date-fns";

  import {
    ExpenseTagSchema,
    IncomeTagSchema,
    MiscTagSchema,
    type ExpenseTag,
    type IncomeTag,
    type MiscTag,
  } from "$lib/schemas";
  import { recordHandler } from "$lib/store/records";
  import { balance } from "$lib/store/balance";

  let selectedOption: IncomeTag | ExpenseTag | MiscTag | "" = ""; // 선택된 옵션을 저장할 변수
  let selectedTab = "지출";
  /**
   * 선택된 탭을 저장하는 함수
   * @param tab 수익이나 지출
   */
  function setSelectedTab(tab: string) {
    selectedTab = tab;
  }
  /**
   * ### `input` 태그에 입력된 숫자 값
   *
   * 소득, 지출 여부를 아직 모름
   */
  let inputNumber = 0;
  let money = 0;
  let pre_balance = balance;

  /**
   * 날짜 입력 값
   */
  let startDate = new Date();
  let dateFormat = "yyyy/MM/dd";
  let isOpen = false;

  const toggleDatePicker = () => (isOpen = !isOpen);

  const formatDate = (dateString: Date) => {
    return (dateString && format(new Date(dateString), dateFormat)) || "";
  };

  let formattedStartDate = formatDate(startDate);

  const onChange = () => {
    startDate = new Date(formattedStartDate);
  };

  $: formattedStartDate = formatDate(startDate);
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
    // 지출,수익 탭에 따라 inputNumber가 다르게 저장
    if (selectedTab === "지출") {
      inputNumber = -Math.abs(inputNumber);
    } else if (selectedTab === "수입") {
      inputNumber = Math.abs(inputNumber);
    }
    recordHandler.add({
      date: formattedStartDate,
      description: "",
      tag: selectedOption || "미분류",
      money: inputNumber,
      balance: 0,
      tab: selectedTab,
    });

    selectedOption = ""; // 선택 필드 초기화
    inputNumber = 0; // 선택 필드 초기화
    console.log(balance);
  }
</script>

<Tabs>
  <TabItem open title="지출" on:click={() => setSelectedTab("지출")}>
    <div class="mx-16">
      <div class="input-group">
        <DatePicker bind:isOpen bind:startDate>
          <input
            type="text"
            placeholder="Select date"
            bind:value={formattedStartDate}
            on:click={toggleDatePicker}
          />
        </DatePicker>
        <input type="number" placeholder="지출 금액" bind:value={inputNumber} />
        <select bind:value={selectedOption}>
          <option value="" disabled>옵션 선택</option>
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
    </div></TabItem
  >
  <TabItem title="수입" on:click={() => setSelectedTab("수입")}>
    <div class="mx-16">
      <div class="input-group">
        <DatePicker bind:isOpen bind:startDate>
          <input
            type="text"
            placeholder="Select date"
            bind:value={formattedStartDate}
            on:click={toggleDatePicker}
          />
        </DatePicker>
        <input type="number" placeholder="수입 금액" bind:value={inputNumber} />
        <select bind:value={selectedOption}>
          <option value="" disabled>옵션 선택</option>
          <!-- 수입 옵션들 -->
          {#each Object.values(IncomeTagSchema.Values) as item}
            <option value={item}>{item}</option>
          {/each}
          <!-- 미분류 옵션들 -->
          {#each Object.values(MiscTagSchema.Values) as item}
            <option value={item}>{item}</option>
          {/each}
        </select>
        <Button color="blue" on:click={addSelectedOption}>추가</Button>
      </div>
    </div></TabItem
  >
</Tabs>

<div class="mx-16">
  <ul>
    {#each $recordHandler as { date, tab, description, tag, money, balance }}
      <li>
        <p>
          {date}
          {tab}: {tag}
          {money}원 {description} 잔액 : {balance}
        </p>
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
  input[type="text"] {
    border: 1px solid #e8e9ea;
    border-radius: 4px;
    padding: 8px;
  }
</style>
