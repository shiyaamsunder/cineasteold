export const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

export const validatePassword = (password: string) => {
  const re =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d!@#$%^&*?]{8,24}$/;
  return re.test(password);
};

const passwordRegex = {
  lowerCaseChar: /^.*[a-z]/,
  upperCaseChar: /^.*[A-Z]/,
  digit: /^.*\d/,
  specialChar: /^.*[!@#$%^&*?]/,
  minLength: /^.*[A-Za-z\d!@#$%^&*?]{8,24}$/,
};

export const validatePasswordParts = (password: string) => {
  return {
    hasValidLength: passwordRegex.minLength.test(password),
    hasOneLowerCase: passwordRegex.lowerCaseChar.test(password),
    hasOneUpperCase: passwordRegex.upperCaseChar.test(password),
    hasOneSpecialChar: passwordRegex.specialChar.test(password),
    hasOneDigit: passwordRegex.digit.test(password),
  };
};
