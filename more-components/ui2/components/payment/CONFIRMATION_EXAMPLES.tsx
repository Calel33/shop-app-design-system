import React, { useState } from 'react';
import { BillPaymentConfirmation } from './BillPaymentConfirmation';

/**
 * Example implementations of BillPaymentConfirmation component
 * Demonstrates various use cases and configurations
 */

// Example 1: Basic Inline Confirmation
export const BasicInlineExample: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);

  if (!showConfirmation) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
      <BillPaymentConfirmation
        transactionId="#9823451"
        amount={120.50}
        currency="USD"
        recipient="Acme Utilities"
        date="2024-06-11"
        variant="inline"
        onDismiss={() => setShowConfirmation(false)}
        onDownloadReceipt={() => {
          console.log('Downloading receipt...');
          // Simulate download delay
          return new Promise(resolve => setTimeout(resolve, 2000));
        }}
      />
    </div>
  );
};

// Example 2: Modal Variant with Backdrop
export const ModalExample: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
      >
        Show Payment Confirmation
      </button>

      {showModal && (
        <BillPaymentConfirmation
          transactionId="#7654321"
          amount={249.99}
          currency="USD"
          recipient="Premium Subscription"
          date={new Date()}
          variant="modal"
          onDismiss={() => setShowModal(false)}
          onDownloadReceipt={async () => {
            console.log('Downloading receipt...');
            await new Promise(resolve => setTimeout(resolve, 1500));
          }}
        />
      )}
    </div>
  );
};

// Example 3: Toast Notification
export const ToastExample: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handlePayment = () => {
    // Simulate payment processing
    setShowToast(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
      <button
        onClick={handlePayment}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
      >
        Process Payment
      </button>

      {showToast && (
        <BillPaymentConfirmation
          transactionId="#5551234"
          amount={89.95}
          currency="USD"
          recipient="Monthly Bill"
          date={new Date()}
          variant="toast"
          autoDismiss={5000}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

// Example 4: Different Payment Types
export const MultiplePaymentTypesExample: React.FC = () => {
  const [activeConfirmation, setActiveConfirmation] = useState<string | null>(null);

  const paymentScenarios = [
    {
      id: 'utilities',
      label: 'Utilities Payment',
      transactionId: '#UTL-8821',
      amount: 156.78,
      recipient: 'City Electric & Water',
    },
    {
      id: 'subscription',
      label: 'Subscription Renewal',
      transactionId: '#SUB-9912',
      amount: 29.99,
      recipient: 'Premium Streaming Service',
    },
    {
      id: 'insurance',
      label: 'Insurance Premium',
      transactionId: '#INS-4432',
      amount: 485.00,
      recipient: 'HealthCare Insurance Co.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Payment Scenarios</h2>
        
        <div className="grid gap-4">
          {paymentScenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveConfirmation(scenario.id)}
              className="p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-left transition-colors"
            >
              <div className="text-white font-medium mb-1">{scenario.label}</div>
              <div className="text-gray-400 text-sm">
                ${scenario.amount.toFixed(2)} to {scenario.recipient}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeConfirmation && (
        <BillPaymentConfirmation
          transactionId={paymentScenarios.find(s => s.id === activeConfirmation)!.transactionId}
          amount={paymentScenarios.find(s => s.id === activeConfirmation)!.amount}
          currency="USD"
          recipient={paymentScenarios.find(s => s.id === activeConfirmation)!.recipient}
          date={new Date()}
          variant="modal"
          onDismiss={() => setActiveConfirmation(null)}
          onDownloadReceipt={async () => {
            console.log('Downloading receipt for', activeConfirmation);
            await new Promise(resolve => setTimeout(resolve, 1000));
          }}
        />
      )}
    </div>
  );
};

// Example 5: Custom Labels and Messages
export const CustomizedExample: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);

  if (!showConfirmation) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
      <BillPaymentConfirmation
        transactionId="#CUSTOM-001"
        amount={500.00}
        currency="EUR"
        recipient="International Transfer"
        date="2024-06-15"
        variant="inline"
        title="Transfer Successful!"
        message="Your international transfer has been completed successfully."
        downloadLabel="Get Receipt"
        dismissLabel="Close"
        onDismiss={() => setShowConfirmation(false)}
        onDownloadReceipt={() => {
          alert('Receipt downloaded!');
        }}
      />
    </div>
  );
};

// Example 6: Without Download Option
export const WithoutDownloadExample: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);

  if (!showConfirmation) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-4">
      <BillPaymentConfirmation
        transactionId="#SIMPLE-789"
        amount={45.00}
        currency="USD"
        recipient="Quick Payment"
        date={new Date()}
        variant="inline"
        onDismiss={() => setShowConfirmation(false)}
        showCloseButton={false}
      />
    </div>
  );
};

// Example 7: Multiple Currencies
export const MultipleCurrenciesExample: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const currencies = [
    { code: 'USD', amount: 100.00, symbol: '$' },
    { code: 'EUR', amount: 92.50, symbol: '€' },
    { code: 'GBP', amount: 79.25, symbol: '£' },
    { code: 'CAD', amount: 135.75, symbol: 'C$' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Select Currency</h2>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {currencies.map((curr) => (
            <button
              key={curr.code}
              onClick={() => setSelectedCurrency(curr.code)}
              className="p-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <div className="text-white font-medium">{curr.code}</div>
              <div className="text-gray-400">{curr.symbol}{curr.amount.toFixed(2)}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedCurrency && (
        <BillPaymentConfirmation
          transactionId={`#${selectedCurrency}-${Date.now()}`}
          amount={currencies.find(c => c.code === selectedCurrency)!.amount}
          currency={selectedCurrency}
          recipient="International Merchant"
          date={new Date()}
          variant="modal"
          onDismiss={() => setSelectedCurrency(null)}
        />
      )}
    </div>
  );
};

// Combined Demo Component
export const AllExamplesDemo: React.FC = () => {
  const [activeExample, setActiveExample] = useState<string>('basic');

  const examples = {
    basic: <BasicInlineExample />,
    modal: <ModalExample />,
    toast: <ToastExample />,
    multiple: <MultiplePaymentTypesExample />,
    custom: <CustomizedExample />,
    simple: <WithoutDownloadExample />,
    currencies: <MultipleCurrenciesExample />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Bill Payment Confirmation Examples
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(examples).map((key) => (
            <button
              key={key}
              onClick={() => setActiveExample(key)}
              className={`
                px-4 py-2 rounded-lg font-medium transition-colors
                ${activeExample === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }
              `}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-slate-900 rounded-xl p-8 border border-slate-700">
          {examples[activeExample as keyof typeof examples]}
        </div>
      </div>
    </div>
  );
};
