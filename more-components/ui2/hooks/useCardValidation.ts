/**
 * useCardValidation Hook
 * Validation logic for card fields
 */

export const useCardValidation = () => {
  /**
   * Validate cardholder name
   */
  const validateCardholderName = (name: string): { isValid: boolean; error?: string } => {
    if (!name || name.trim().length === 0) {
      return { isValid: false, error: 'Cardholder name is required' };
    }
    
    if (name.trim().length < 2) {
      return { isValid: false, error: 'Name must be at least 2 characters' };
    }
    
    if (name.length > 50) {
      return { isValid: false, error: 'Name must be less than 50 characters' };
    }
    
    // Only letters, spaces, hyphens, apostrophes
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return { isValid: false, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
    }
    
    return { isValid: true };
  };

  /**
   * Validate card number
   */
  const validateCardNumber = (cardNumber: string): { isValid: boolean; error?: string } => {
    const cleaned = cardNumber.replace(/\s/g, '');
    
    if (!cleaned || cleaned.length === 0) {
      return { isValid: false, error: 'Card number is required' };
    }
    
    if (!/^\d+$/.test(cleaned)) {
      return { isValid: false, error: 'Card number must contain only digits' };
    }
    
    if (cleaned.length < 13 || cleaned.length > 19) {
      return { isValid: false, error: 'Card number must be 13-19 digits' };
    }
    
    // Basic Luhn algorithm check (optional but recommended)
    if (!luhnCheck(cleaned)) {
      return { isValid: false, error: 'Invalid card number' };
    }
    
    return { isValid: true };
  };

  /**
   * Validate expiry date
   */
  const validateExpiryDate = (expiryDate: string): { isValid: boolean; error?: string } => {
    if (!expiryDate || expiryDate.length === 0) {
      return { isValid: false, error: 'Expiry date is required' };
    }
    
    const parts = expiryDate.split('/');
    if (parts.length !== 2) {
      return { isValid: false, error: 'Expiry date must be in MM/YY format' };
    }
    
    const month = parseInt(parts[0], 10);
    const year = parseInt(parts[1], 10);
    
    if (isNaN(month) || isNaN(year)) {
      return { isValid: false, error: 'Invalid expiry date' };
    }
    
    if (month < 1 || month > 12) {
      return { isValid: false, error: 'Month must be between 01 and 12' };
    }
    
    // Check if card is expired
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; // Last 2 digits
    const currentMonth = currentDate.getMonth() + 1;
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return { isValid: false, error: 'Card has expired' };
    }
    
    return { isValid: true };
  };

  /**
   * Validate CVC
   */
  const validateCVC = (cvc: string, cardType: string = 'generic'): { isValid: boolean; error?: string } => {
    if (!cvc || cvc.length === 0) {
      return { isValid: false, error: 'CVC is required' };
    }
    
    if (!/^\d+$/.test(cvc)) {
      return { isValid: false, error: 'CVC must contain only digits' };
    }
    
    const expectedLength = cardType === 'amex' ? 4 : 3;
    
    if (cvc.length !== expectedLength) {
      return { isValid: false, error: `CVC must be ${expectedLength} digits` };
    }
    
    return { isValid: true };
  };

  /**
   * Validate country selection
   */
  const validateCountry = (country: string): { isValid: boolean; error?: string } => {
    if (!country || country.length === 0) {
      return { isValid: false, error: 'Country is required' };
    }
    
    return { isValid: true };
  };

  /**
   * Luhn algorithm for card number validation
   */
  const luhnCheck = (cardNumber: string): boolean => {
    let sum = 0;
    let isEven = false;
    
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      isEven = !isEven;
    }
    
    return sum % 10 === 0;
  };

  // Alias for consistency with legacy naming
  const validateSecurityCode = validateCVC;

  return {
    validateCardholderName,
    validateCardNumber,
    validateExpiryDate,
    validateCVC,
    validateSecurityCode,
    validateCountry,
    validation: {
      validateCardholderName,
      validateCardNumber,
      validateExpiryDate,
      validateCVC,
      validateSecurityCode,
      validateCountry,
    }
  };
};
