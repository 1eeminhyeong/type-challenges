type Concat<T extends (any[] | readonly any[]), U extends any[]> = T extends [...infer restT] ? U extends [...infer restU] ? [...restT, ...restU] : [] : []
