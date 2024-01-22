import { resultPrice } from "../../helpers/resultPrice"

export const Price = ({price, discount, size="default", orientation="column"}) => {

  return (
    <div className={`flex ${orientation === "row" ? " flex-row gap-12 items-center" : "flex-col"}`}>
    <div className="flex gap-1 w-12">
    <p
    className={`text-3xl tracking-tight text-gray-900 ${
      (discount && discount > 0) &&
      ' line-through'
    } ${size === "small" && "text-xl md:text-2xl"}`}
  >
    {price}
  </p>
  {discount > 0 && (
    <p className={`text-md tracking-tight text-red ${size === "small" && "text-sm"}`}>
      -<span>{discount}</span>%
    </p>
  )}
    </div>
    {discount > 0 && (
    <p className={`text-4xl tracking-tight text-red ${size === "small" && "font-bold text-[28px]"}`}>
      {resultPrice(price, discount)}
    </p>
  )}
  </div>
  )
}
