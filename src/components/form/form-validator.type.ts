/**
 * Validator
 * @param value undefined if there is no error. Message if error.
 */
export type IFormValidator<T> = (value: T) => string | boolean;
