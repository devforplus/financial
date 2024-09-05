import type { SingleRecord } from "$lib/schemas";
import { writable } from "svelte/store";

/**
 * ### 가계부 기록을 관리하는 객체
 *
 * - `add`: 가계부 기록 추가 가능
 * - `remove`: 가계부 기록 제거 가능
 * - 그 외 Svelte 기본 writable 상태가 가진 기능을 사용 가능
 */
export const recordHandler = (() => {
	/** 가계부 기록을 관리하는 상태 값 (여기서 저장) */
	const records = writable<SingleRecord[]>([]);

	/** 데이터 추가하는 함수 */
	const add = (newRecord: SingleRecord) => {
		records.update((prevRecords) => [...prevRecords, newRecord]);
	};

	/** 데이터 제거하는 함수 */
	const remove = (index: number) => {
		records.update((prevRecords) => {
			return [...prevRecords.slice(0, index), ...prevRecords.slice(index + 1)];
		});
	};

	return {
		set: records.set,
		update: records.update,
		subscribe: records.subscribe,
		add,
		remove,
	};
})();
