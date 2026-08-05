import { useState } from 'react'
import './App.css'

const currencyRates = {
  usd: 1,
  inr: 83.5,
  eur: 0.92,
  jpy: 156.7,
  gbp: 0.79,
  aud: 1.52,
  cad: 1.36,
}

function InputBox({
  label,
  amount,
  currencyOptions,
  onAmountChange,
  onCurrencyChange,
  selectCurrency,
  amountDisable,
}) {
  return (
    <div className="bg-white/70 p-3 rounded-lg border border-gray-200">
      <label className="text-sm text-gray-700">{label}</label>
      <div className="flex gap-2 mt-2">
        <input
          type="number"
          className="w-full p-2 rounded-md border border-gray-300 outline-none"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          placeholder="0"
        />
        <select
          className="p-2 rounded-md border border-gray-300 outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const options = Object.keys(currencyRates)

  const swap = () => {
    const previousAmount = amount
    setFrom(to)
    setTo(from)
    setConvertedAmount(previousAmount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    const rate = currencyRates[to]
    setConvertedAmount(rate ? Number(amount) * rate : 0)
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80')" }}>
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            convert()
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onAmountChange={(value) => setAmount(value)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onAmountChange={() => {}}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
