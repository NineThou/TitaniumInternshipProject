export const required = value => (
  value ? undefined : 'Required'
);
export const minLength = min => value => (
  value && value.trim().length < min ? `Must be ${min} characters atleast` : undefined
);
export const minLength4 = minLength(4);
export const minLength15 = minLength(15);

export const splitWithCommas = value => (
  value.toString().trim().match(/(\w+\s)/i) ? 'There should be no spaces inside the tags' : undefined
);

export const maxLength = max => value => (
  value && value.trim().length > max ? `Must be no longer than ${max} characters` : undefined
);

export const maxLength500 = maxLength(2000);
