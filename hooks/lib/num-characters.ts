import { customAlphabet } from 'nanoid';

const numCharacters = `0123456789`;
const keyValidation = customAlphabet(numCharacters, 5);
export default keyValidation;
