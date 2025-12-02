import type { OrderSummaryProps } from './types';
import { CardBrandIcon } from './CardBrandIcons';

export const OrderSummary = ({
  items,
  subtotal,
  tax,
  total,
  termsLink = '#',
  paymentMethods = ['visa', 'mastercard', 'amex', 'paypal'],
  className = '',
}: OrderSummaryProps) => {
  return (
    <div className={`bg-muted/60 p-8 border-l border-border/20 ${className}`}>
      <h3 className="text-lg font-semibold text-foreground mb-6">Order summary</h3>

      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between items-start">
            <div className="flex items-center">
              <div
                className={`h-12 w-12 rounded-md flex items-center justify-center ${
                  item.iconBgColor || 'bg-primary/10'
                }`}
              >
                <div className={item.iconColor || 'text-primary'}>{item.icon}</div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-foreground">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* Subtotal and Tax */}
      <div className="border-t border-border/20 pt-4 mb-6">
        <div className="flex justify-between mb-2">
          <p className="text-sm text-muted-foreground">Subtotal</p>
          <p className="text-sm font-medium text-foreground">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-muted-foreground">Tax</p>
          <p className="text-sm font-medium text-foreground">${tax.toFixed(2)}</p>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-border/20 pt-4">
        <div className="flex justify-between">
          <p className="text-base font-medium text-foreground">Total</p>
          <p className="text-base font-bold text-foreground">${total.toFixed(2)}</p>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          By completing this purchase you agree to our{' '}
          <a href={termsLink} className="text-primary hover:text-primary/80">
            terms and conditions
          </a>
        </p>
      </div>

      {/* Payment Methods */}
      <div className="mt-8">
        <div className="flex items-center justify-center space-x-3">
          {paymentMethods.map((method) => (
            <CardBrandIcon key={method} brand={method} className="w-10 h-7" />
          ))}
        </div>
      </div>
    </div>
  );
};
