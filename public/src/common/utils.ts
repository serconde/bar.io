export const formatCurrency = (locale: string, currency: string, amount: number): string =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(amount);

export const formatToEuros = (amount: number): string => formatCurrency('es-ES', 'EUR', amount);
