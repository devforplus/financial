import z from "zod";

export const ExpenseTagSchema = z.enum(["식비"]);

/** 지출 태그 */
export type ExpenseTag = z.infer<typeof ExpenseTagSchema>;
