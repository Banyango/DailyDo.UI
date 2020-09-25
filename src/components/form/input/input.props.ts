import { IFormField } from "../form.props";

export interface IInputProps<T> {
  /**
   * Input type.
   */
  type: HTMLInputElement["type"];

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
   * The tab index.
   */
  tabIndex?:number;

  /**
   * Emitted on blur.
   */
  onBlur?: () => void;

  /**
   * Emitted on change.
   */
  onChange?: () => void;

  /**
   * Emitted on key down.
   */
  onKeyDown?: (event) => void;

  /**
   * Disabled.
   */
  disabled?: boolean;
}
