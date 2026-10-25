const DIGITS = "০১২৩৪৫৬৭৮৯";

export const toBn = (v: number | string) =>
  String(v).replace(/\d/g, (d) => DIGITS[Number(d)]);

export const fmtPrice = (n: number) => toBn(n.toLocaleString("en-US"));

export const fmtPct = (n: number) => toBn(Math.abs(n).toFixed(1));

export const fmtAvg = (n: number) =>
  toBn(
    n.toLocaleString("en-US", {
      minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
      maximumFractionDigits: 2,
    }),
  );

export const banglaDate = () =>
  new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());
