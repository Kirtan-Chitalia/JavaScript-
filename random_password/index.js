function generatePassword(length, lowercase , upercase , numbers , symbols){
    const lowercasechars ="abcdefghijklmnopqrstuvwxyz";
    const upercasechars= "ABCDEFGHIJKLMNOPQRSYTUVWXYZ";
    const numberschars ='1234567890';
    const symbolschars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedchars = "";
    let password = "";


    allowedchars += lowercase ? lowercasechars : '';
    allowedchars += upercase ? upercasechars : '';
    allowedchars += numbers ? numberschars : '';
    allowedchars += symbols ? symbolschars : '';

    if(length <=0 ){
        return ('password length must be greater than 0');
    }
    if(allowedchars.length === 0){
        return ('At least one character type must be selected');
    }

    for (let i = 0; i < length; i++) {
        password += allowedchars.charAt(Math.floor(Math.random() * allowedchars.length));
    }

    return password;
}




const passwordLength = 7;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = false;
const includeSymbols = false;

const pass =generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Your generated password is: ${pass}`);