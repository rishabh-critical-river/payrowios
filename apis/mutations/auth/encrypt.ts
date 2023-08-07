import * as crypto from 'crypto';

function encrypt(
  strToEncrypt: string,
  secret: string,
  iv: string,
  alg: string
): string | null {
  try {
    const key = crypto.createHash('sha256').update(secret).digest();
    const ivBuffer = Buffer.from(iv, 'utf-8');
    const cipher = crypto.createCipheriv(alg, key, ivBuffer);
    let encrypted = cipher.update(strToEncrypt, 'utf-8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  } catch (e) {
    console.log('Error while encrypting:', e.toString());
  }
  return null;
}

export default encrypt;
// function main() {
//     const message = 'Hello, this is a secret message!';
//     const secretKey = 'mySecretKey12345';
//     const iv = '1234567890123456';
//     const encryptionAlgorithm = 'aes-256-cbc';

//     const encryptedMessage = encrypt(message, secretKey, iv, encryptionAlgorithm);
//     console.log('Encrypted Message:', encryptedMessage);
// }

// main();
