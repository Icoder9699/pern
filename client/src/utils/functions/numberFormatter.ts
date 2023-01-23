export const currencyFormatter = (number: string | number, currencySymbol = 'SUM') => (`${Intl.NumberFormat().format(Number(number))} ${currencySymbol}`)