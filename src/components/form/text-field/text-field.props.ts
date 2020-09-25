import { IFormField } from "../form.props";

export interface ITextFieldProps<T> {
  /**
   * Form field.
   */
  field: IFormField<T>;

  /**
   * CSS class
   */
  className?: string;

  /**
   * CSS menu button class name.
   */
  menuButtonClassName?:string;

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

  /**
   * Disabled.
   */
  disabled?: boolean;

  /**
   * True if always editing; false otherwise.
   */
  alwaysEditing?:boolean;

}
