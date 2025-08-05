import { isValidCardNumber, getCardType } from '../src/validators';

describe('Credit card validators', () => {
    test('validates correct card numbers', () => {
        expect(isValidCardNumber('4111111111111111')).toBe(true); // Visa
        expect(isValidCardNumber('5500000000000004')).toBe(true); // Mastercard
        expect(isValidCardNumber('2200123456789017')).toBe(true); // Mir (этот номер валиден по Луну)
    });

    test('rejects invalid card numbers', () => {
        expect(isValidCardNumber('1234567890123456')).toBe(false);
    });

    test('detects card types correctly', () => {
        expect(getCardType('4111111111111111')).toBe('visa');
        expect(getCardType('5500000000000004')).toBe('mastercard');
        expect(getCardType('2200123456789010')).toBe('mir');
        expect(getCardType('0000000000000000')).toBe('unknown');
    });
});