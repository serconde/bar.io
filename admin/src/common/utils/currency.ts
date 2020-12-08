export const formatToCurrency = (amount: number, locale: string, currency: string): string =>
  new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(amount);

export const formatToEuro = (amount: number): string => formatToCurrency(amount, 'es-ES', 'EUR');
