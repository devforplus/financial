import z from "zod";

import { IncomeTagSchema } from "./income-tag";
import { ExpenseTagSchema } from "./expense-tag";
import { MiscTagSchema } from "./misc-tag";

export const SingleRecordSchema = z.object({
	// 처리된 날짜
	date: z.string(),

	// 입출금 액수: 정수로 제한
	money: z.number().int(),
	
	// 처리 전 잔액
	pre_balance : z.number().int(),

	// 설명
	description: z.string(),

	tag: z.union([IncomeTagSchema, ExpenseTagSchema, MiscTagSchema]),
});

/** 가계부용 개별 기록 */
export type SingleRecord = z.infer<typeof SingleRecordSchema>;
