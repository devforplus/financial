import z from "zod";

export const IncomeTagSchema = z.enum(["월급", "용돈"]);

/** 수입 태그 */
export type IncomeTag = z.infer<typeof IncomeTagSchema>;
