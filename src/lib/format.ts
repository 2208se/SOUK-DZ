export function formatPrice(amount: number, currency: string): string {
  if (currency === "DZD") {
    return `${new Intl.NumberFormat("fr-DZ", { maximumFractionDigits: 0 }).format(amount)} DZD`;
  }
  try {
    return new Intl.NumberFormat("fr-DZ", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${amount} ${currency}`;
  }
}

export const conditionLabels: Record<string, string> = {
  new: "New",
  like_new: "Like new",
  good: "Good",
  acceptable: "Acceptable",
};

export const categoryLabels: Record<string, string> = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
};
