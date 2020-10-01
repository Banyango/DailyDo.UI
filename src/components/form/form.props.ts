import { IFormChildProps } from "./form-child.props";
import { IFormValidator } from "./form-validator.type";
import {
  FieldValues,
  SubmitHandler,
  UnpackNestedValue,
} from "react-hook-form/dist/types/form";
import { Schema } from "yup";
import {Ref} from "react";
import {Task} from "../../state/task";

export interface IFormStateProps<TChildProps extends IFormChildProps> {
  /**
   * Fields
   */
  fields: {
    [k in keyof TChildProps]: IFormField<any>;
  };
  /**
   * Error message
   */
  error?: string;

  /**
   * True if form is initializing; false otherwise.
   */
  initializing: boolean;

  /**
   * True if form is submitting; false otherwise.
   */
  submitting: boolean;

  /**
   * The validation validationSchema.
   */
  validationSchema?: {
    [k in keyof TChildProps]: Schema<any>;
  };
}

export interface IFormDispatchProps<TChildProps extends IFormChildProps> {
  onSubmit: (data: TChildProps) => void;
}

export interface IFormProps<T extends Record<string, any>> {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Callback invoked onSubmit.
   */
  onSubmit: SubmitHandler<T>;

  /**
   * Form Ref.
   */
  ref?: Ref<HTMLFormElement>;

  /**
   * Server response error message.
   */
  error?: string;

  /**
   * True if the form is submitting; false otherwise.
   */
  isSubmitting: boolean;

  /**
   * Validation validationSchema.
   */
  schema: {
    [k in keyof T]: Schema<any>;
  };
}

export interface IFormField<T> {
  name: string;
  defaultValue: T;
  placeholder: string;
  value?:T;
}

export function createFormField<T>(
  name: string,
  defaultValue: T,
  placeholder?: string,
  value?:T
): IFormField<T> {
  return {
    name,
    defaultValue,
    placeholder,
    value
  };
}
