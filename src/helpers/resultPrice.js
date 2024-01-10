export const resultPrice = (price, discount) => {
  let priceToNumber = Number(price)

  if(!discount) {
    return price
  }
  
  if (discount === 0) {
    return price
  } 
  return String(Math.round(price - (priceToNumber / 100 * discount)))
}