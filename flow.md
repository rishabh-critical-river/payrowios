https://payrowdev.uaenorth.cloudapp.azure.com/onboarding/login/checkDevice

On sign in screen

<!-- first-time -->

true => Enter pin screen auth screen

<!-- more-than--one-time -->

false=> rees code = 500 = popup = logut from all device = continue = auth screen

false => res code = 400 = alert =

2-> Enter Auth screen

Send code

https://payrowdev.uaenorth.cloudapp.azure.com/onboarding/login/loginOtp

{
"tid":"123456"
}

Encrypted data

"data": "eyJrZXkiOiJKL1BZamMxZnRERks1Kzc3VTFQQjgwdjJUYW1va0dhcDV5Q0lQMllJNnRRPSIsIml2IjoiZ2FPcjN1dmhaRXdGZVNiUkh3bEhjZz09IiwiQUVTIjoiQUVTL0NCQy9Ob1BBRERJTkciLCJBTEciOiJBRVMvQ0JDL1BLQ1M1UEFERElORyJ9"

base 64 to string

{IV,KEY}

when clicking submit SUBMIT => to verify

onboarding/login/verify

{
code: '5662',
tid: '072837',
imeiNumber: '584096016d08e2b9',
keyValidation: '12398'
}

=> need to encrypt and send in req body
