import './styles.css';
import { isValidCardNumber, getCardType } from './validators';
import visaImg from './images/visa.png';
import mastercardImg from './images/mastercard.png';
import mirImg from './images/mir.png';

const cardInput = document.getElementById('card-input');
const cardTypeDiv = document.getElementById('card-type');
const validationResultDiv = document.getElementById('validation-result');
const cardImage = document.getElementById('card-image');

const images = {
    visa: visaImg,
    mastercard: mastercardImg,
    mir: mirImg,
    unknown: '',
};

cardInput.addEventListener('input', () => {
    const value = cardInput.value;

    const cardType = getCardType(value);
    const valid = isValidCardNumber(value);

    cardTypeDiv.textContent = `Card type: ${cardType !== 'unknown' ? cardType : 'Unknown'}`;
    validationResultDiv.textContent = valid ? 'The card number is valid' : 'The card number no valid';
    validationResultDiv.className = valid ? '' : 'invalid';

    cardImage.src = images[cardType] || '';
    cardImage.alt = cardType !== 'unknown' ? `${cardType} logo` : '';
});