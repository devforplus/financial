import z from "zod";

import { IncomeTagSchema } from "./income-tag";
import { ExpenseTagSchema } from "./expense-tag";
import { MiscTagSchema } from "./misc-tag";
import { balance } from "$lib/store/balance";

export const SingleRecordSchema = z.object({
	// 처리된 날짜
	date: z.string(),

	// 입출금 액수: 정수로 제한
	money: z.number().int(),
	// 처리 전 잔액
	balance: z.number().int(),
	// 설명
	description: z.string(),
	//옵션 선택 
	tag: z.union([IncomeTagSchema, ExpenseTagSchema, MiscTagSchema]),
	//수익, 지출 탭
	tab: z.string(),
});

/** 가계부용 개별 기록 */
export type SingleRecord = z.infer<typeof SingleRecordSchema>;
