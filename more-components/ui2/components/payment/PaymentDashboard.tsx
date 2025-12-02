import type { PaymentDashboardProps } from './types';
import { PaymentForm } from './PaymentForm';
import { OrderSummary } from './OrderSummary';

export const PaymentDashboard = ({
  title,
  subtitle,
  orderSummary,
  onPaymentSubmit,
  paymentMethods,
  securityMessage,
  termsLink,
  className = '',
}: PaymentDashboardProps) => {
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 bg-muted ${className}`}>
      <div className="max-w-4xl w-full bg-card text-foreground rounded-[calc(var(--radius)*1.5)] border border-border/20 shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left Column: Payment Form */}
          <div className="md:w-3/5 p-8 bg-card">
            <PaymentForm
              title={title}
              subtitle={subtitle}
              amount={orderSummary.total}
              onSubmit={onPaymentSubmit}
              securityMessage={securityMessage}
            />
          </div>

          {/* Right Column: Order Summary */}
          <div className="md:w-2/5">
            <OrderSummary
              items={orderSummary.items}
              subtotal={orderSummary.subtotal}
              tax={orderSummary.tax}
              total={orderSummary.total}
              termsLink={termsLink}
              paymentMethods={paymentMethods}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
