export const required = value => (
  value ? undefined : 'Required'
);
export const minLength = min => value => (
  value && value.trim().length < min ? `Must be ${min} characters atleast` : undefined
);
export const minLength4 = minLength(4);
export const minLength15 = minLength(15);

export const splitWithCommas = value => (
  value.trim().match(/(,$)/g) ? 'Split tags with comma' : undefined
);

export const maxLength = max => value => (
  value && value.trim().length > max ? `Must be no longer than ${max} characters` : undefined
);

export const maxLength500 = maxLength(500);
