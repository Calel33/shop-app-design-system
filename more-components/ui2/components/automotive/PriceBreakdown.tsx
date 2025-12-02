import React, { useState, useCallback } from 'react'
import { Calculator, DollarSign, CreditCard, Banknote } from 'lucide-react'
import { PriceBreakdownProps, FinancingOption } from '../types/automotive.types'

export const PriceBreakdown: React.FC<PriceBreakdownProps> = ({
  basePrice: _basePrice,
  breakdown,
  financingOptions,
  className = '',
  showCalculator = true
}) => {
  const [selectedFinancing, setSelectedFinancing] = useState<FinancingOption | null>(
    financingOptions.length > 0 ? financingOptions[0] : null
  )
  const [calculatorValues, setCalculatorValues] = useState({
    downPayment: selectedFinancing?.downPayment || 0,
    termMonths: selectedFinancing?.termMonths || 60,
    apr: selectedFinancing?.apr || 4.9,
    tradeInValue: 0
  })
  const [showCalculatorPanel, setShowCalculatorPanel] = useState(false)

  // Calculate totals from breakdown
  const subtotal = breakdown
    .filter(item => ['base', 'option'].includes(item.type))
    .reduce((sum, item) => sum + item.amount, 0)
  
  const fees = breakdown
    .filter(item => item.type === 'fee')
    .reduce((sum, item) => sum + item.amount, 0)
  
  const taxes = breakdown
    .filter(item => item.type === 'tax')
    .reduce((sum, item) => sum + item.amount, 0)
  
  const discounts = breakdown
    .filter(item => item.type === 'discount')
    .reduce((sum, item) => sum + Math.abs(item.amount), 0)

  const totalPrice = subtotal + fees + taxes - discounts

  // Calculate monthly payment
  const calculateMonthlyPayment = useCallback((
    principal: number,
    apr: number,
    termMonths: number,
    downPayment: number,
    tradeIn: number = 0
  ) => {
    const loanAmount = principal - downPayment - tradeIn
    if (loanAmount <= 0) return 0
    
    const monthlyRate = apr / 100 / 12
    if (monthlyRate === 0) return loanAmount / termMonths
    
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths))
    return payment
  }, [])

  const monthlyPayment = calculateMonthlyPayment(
    totalPrice,
    calculatorValues.apr,
    calculatorValues.termMonths,
    calculatorValues.downPayment,
    calculatorValues.tradeInValue
  )

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const updateCalculatorValue = (field: keyof typeof calculatorValues, value: number) => {
    setCalculatorValues(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className={`price-breakdown ${className}`}>
      {/* Price Summary Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-gray-900">Pricing</h3>
          <div className="text-right">
            <div className="text-3xl font-bold text-blue-600">{formatCurrency(totalPrice)}</div>
            <div className="text-sm text-gray-600">Total Price</div>
          </div>
        </div>
        
        {/* Quick Financing Display */}
        {selectedFinancing && (
          <div className="flex items-center justify-between py-3 px-4 bg-white/50 rounded-lg backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                {selectedFinancing.type === 'lease' ? 'Lease' : 'Finance'}
              </span>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-gray-900">
                {formatCurrency(monthlyPayment)}/mo
              </div>
              <div className="text-xs text-gray-600">
                {calculatorValues.termMonths} months • {calculatorValues.apr}% APR
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Detailed Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h4 className="font-semibold text-gray-900">Price Breakdown</h4>
        </div>
        
        <div className="divide-y divide-gray-200">
          {breakdown.map((item, index) => (
            <div key={index} className="px-6 py-4 flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">{item.label}</div>
                {item.description && (
                  <div className="text-sm text-gray-500">{item.description}</div>
                )}
              </div>
              <div className={`font-semibold ${
                item.type === 'discount' 
                  ? 'text-green-600' 
                  : item.type === 'total' 
                    ? 'text-xl text-gray-900' 
                    : 'text-gray-900'
              }`}>
                {item.type === 'discount' ? '-' : ''}{formatCurrency(Math.abs(item.amount))}
              </div>
            </div>
          ))}
          
          {/* Calculated Total */}
          <div className="px-6 py-4 bg-gray-50 flex items-center justify-between border-t-2 border-gray-300">
            <div className="font-bold text-lg text-gray-900">Total Price</div>
            <div className="font-bold text-xl text-blue-600">{formatCurrency(totalPrice)}</div>
          </div>
        </div>
      </div>

      {/* Financing Options */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Financing Options</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {financingOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedFinancing(option)}
              className={`p-4 rounded-xl border-2 transition-all text-left ${
                selectedFinancing === option
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                {option.type === 'cash' ? (
                  <Banknote className="h-5 w-5 text-green-600" />
                ) : (
                  <CreditCard className="h-5 w-5 text-blue-600" />
                )}
                <span className="font-semibold text-gray-900 capitalize">
                  {option.type}
                </span>
              </div>
              
              {option.monthlyPayment && (
                <div className="text-lg font-bold text-gray-900 mb-1">
                  {formatCurrency(option.monthlyPayment)}/mo
                </div>
              )}
              
              <div className="text-sm text-gray-600 space-y-1">
                {option.downPayment > 0 && (
                  <div>Down: {formatCurrency(option.downPayment)}</div>
                )}
                {option.termMonths && (
                  <div>{option.termMonths} months</div>
                )}
                {option.apr && (
                  <div>{option.apr}% APR</div>
                )}
              </div>
              
              <div className="text-xs text-gray-500 mt-2">
                {option.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Payment Calculator */}
      {showCalculator && (
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Calculator className="h-5 w-5 text-blue-600" />
              <h4 className="text-lg font-semibold text-gray-900">Payment Calculator</h4>
            </div>
            <button
              onClick={() => setShowCalculatorPanel(!showCalculatorPanel)}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              {showCalculatorPanel ? 'Hide' : 'Customize'}
            </button>
          </div>

          {/* Calculator Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">
                {formatCurrency(monthlyPayment)}
              </div>
              <div className="text-sm text-gray-600">Est. Monthly Payment</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(calculatorValues.downPayment)}
              </div>
              <div className="text-sm text-gray-600">Down Payment</div>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">
                {formatCurrency(totalPrice - calculatorValues.downPayment - calculatorValues.tradeInValue)}
              </div>
              <div className="text-sm text-gray-600">Amount Financed</div>
            </div>
          </div>

          {/* Calculator Controls */}
          {showCalculatorPanel && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={calculatorValues.downPayment}
                    onChange={(e) => updateCalculatorValue('downPayment', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (months)
                </label>
                <select
                  value={calculatorValues.termMonths}
                  onChange={(e) => updateCalculatorValue('termMonths', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={36}>36 months</option>
                  <option value={48}>48 months</option>
                  <option value={60}>60 months</option>
                  <option value={72}>72 months</option>
                  <option value={84}>84 months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  APR (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={calculatorValues.apr}
                  onChange={(e) => updateCalculatorValue('apr', Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="4.9"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trade-in Value
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={calculatorValues.tradeInValue}
                    onChange={(e) => updateCalculatorValue('tradeInValue', Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-4 text-xs text-gray-500">
            * Estimated payments are for illustration purposes only. Actual terms may vary based on creditworthiness, 
            down payment, and other factors. Contact dealer for actual pricing and terms.
          </div>
        </div>
      )}
    </div>
  )
}