export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function clamp(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
