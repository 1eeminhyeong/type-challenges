type First<T extends any[]> = T extends [infer A, ...infer _rest] ? A : never
