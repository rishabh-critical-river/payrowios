export enum PaymentMode {
  TAPTOPAY = 'Card',
  CASHPAYMENT = 'Cash',
  PAYBYLINK = 'Paybylink',
  PAYBYQRCODE = 'generateQR',
}
// "Cash", "Card", "ECOMMERCE", "Paybylink", "generateQR"

export enum SharingApps {
  WHATSAPP = 'Whatsapp',
  EMAIL = 'Email',
  SMS = 'Sms',
  FACEBOOK = 'Facebook',
  TWITTER = 'Twitter',
  INSTAGRAM = 'Instagram',
  LINKEDIN = 'Linkedin',
  QR = 'QR',
}

export enum RecallMethodTypes {
  BYTRANSACTIONID = 'BYTRANSACTIONID',
  BYDATE = 'BYDATE',
}
