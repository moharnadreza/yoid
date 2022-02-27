export const yoid = (): string => {
  return Math.random()
    .toString(36)
    .substring(2, 10)
}
