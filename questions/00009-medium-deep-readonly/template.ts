// type DeepReadonly<T> = {
//   readonly [P in keyof T]: T[P] extends object
//     ? T[P] extends Function
//       ? T[P]
//       : DeepReadonly<T[P]>
//     : T[P]
// }
type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [key in keyof T]: DeepReadonly<T[key]> }
