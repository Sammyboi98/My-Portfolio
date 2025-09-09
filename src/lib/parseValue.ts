// utils/parseValue.ts
export function parseValue(value: string | number) {
  const match = String(value).match(/^(\d+)(.*)$/); 
  if (!match) return { number: 0, suffix: "" };
  return { number: Number(match[1]), suffix: match[2] || "" };
}