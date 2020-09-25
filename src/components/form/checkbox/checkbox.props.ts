import { IFormField } from "../form.props";

export interface ICheckboxProps<T> {
  /**
   * Checkbox type.
   */
  type: "checkbox";

  /**
   * Form field.
   */
  field: IFormField<T>;

  /**
   * CSS class
   */
  className?: string;

  /**
   * CSS class for inner
   */
  classNameInner?: string;

  /**
   * Optional label.
   */
  label?:string;

  /**
   * Emitted on blur.
   */
  onBlur?: () => void;

  /**
   * Emitted on change.
   */
  onChange?: () => void;
}
