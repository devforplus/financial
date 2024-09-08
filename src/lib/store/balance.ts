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
	return records.reduce((pre_balance, currentValue) => {
		return pre_balance + currentValue.money;
	}, 0);
});
