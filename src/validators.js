// Проверка по алгоритму Луна (Luhn algorithm)
export function isValidCardNumber(cardNumber) {
    const digits = cardNumber.replace(/\D/g, '');
    let sum = 0;
    let shouldDouble = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = parseInt(digits[i], 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
}

// Определение платежной системы по префиксу номера
export function getCardType(cardNumber) {
    const num = cardNumber.replace(/\D/g, '');

    const patterns = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[0-1][0-9]{12}|720[0-9]{12}))$/,
        mir: /^220[0-4][0-9]{12}$/,
        // Добавьте другие по необходимости
    };

    for (const [card, pattern] of Object.entries(patterns)) {
        if (pattern.test(num)) return card;
    }

    return 'unknown';
}