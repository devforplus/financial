import { derived } from "svelte/store";
import { recordHandler } from "./records";

/**
 * ### 현재 잔액
 *
 * #### NOTE
 *
 * - 지출은 `-`부호, 수입은 `+`로 저장됨
 * - 지출 예시: `-100`
 * - 수입 예시: `+100`
 */
export const balance = derived(recordHandler, (records) => {
	return records.reduce((returnValue, currentValue) => {
		return returnValue + currentValue.money;
	}, 0);
});
