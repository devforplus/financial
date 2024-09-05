import z from "zod";

// 미분류 태그
export const MiscTagSchema = z.enum(["미분류"]);

export type MiscTag = z.infer<typeof MiscTagSchema>;
