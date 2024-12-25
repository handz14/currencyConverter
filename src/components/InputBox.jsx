import React, { useId } from 'react'

const InputBox = ({
  label,
  amount,
  onCurrencyChange,
  onAmountChange,
  selectedCurrency = "usd",
  currencyOptions = [],
  amountDisabled = false,
  currencyDisabled = false,
  className = ""
}) => {

  const id = useId();

  return (
    <div className={`bg-white text-sm p-3 rounded-lg flex ${className}`}>
      <div className='w-1-2'>
        <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input
          id={id}
          type="number"
          className='w-full outline-none bg-transparent py-1.5'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 w-full'>Currency Type</p>
        <select
          className='rounded-lg p-1 bg-gray-100 cursor-pointer outline-none'
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox