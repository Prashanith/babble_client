export function isNullUndefinedOrEmpty(e: string| null| undefined): boolean {
  return e == undefined || e == null || e.length == 0;
}