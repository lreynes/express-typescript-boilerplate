export const equals = (a: unknown[], b: unknown[]): boolean =>
  a.length === b.length && a.every((v, i) => v === b[i]);
