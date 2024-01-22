import { useState } from "react";
import { Price } from "../../pages/Price/Price";

export const TypeProductSwitcher = ({product }) => {
  const [type, setType] = useState('roll');
  const [price, setPrice] = useState(product.price);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 mb-4">
    <label>
      <input
        type="radio"
        value="roll"
        className="peer hidden"
        name={`${product.name}-${product.color}`}        defaultChecked 
        onChange={() => {
          setType('roll')
          setPrice(product.price);
        }}
      />

      <div className="hover:bg-gray-50 flex items-center justify-between px-4 py-1 md:py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500">
        <h2 className="font-medium text-gray-700">Рулон</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="green"
          className="w-6 h-6 md:w-9 md:h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </label>

    <label>
      <input
        type="radio"
        value="1"
        className="peer hidden"
        name={`${product.name}-${product.color}`}        disabled={(product.pricePerMeter && product.pricePerMeter < 0) ||  !product.pricePerMeter}
        onChange={() => {
          setType('meter');
          setPrice(product.pricePerMeter || 0); 
        }}
      />

      <div className={`hover:bg-gray-50 flex items-center justify-between px-4 py-1 md:py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500 ${(product.pricePerMeter && product.pricePerMeter > 0) ||  !product.pricePerMeter && "opacity-50"}`}>
        <h2 className="font-medium text-gray-700">Метраж</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="green"
          className="w-6 h-6 md:w-9 md:h-9 text-blue-600 invisible group-[.peer:checked+&]:visible"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </label>
    <Price price={price} discount={product.discount} orientation='row' size='small'/>
  </div>
  )
}
