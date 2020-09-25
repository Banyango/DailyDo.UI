export interface IConfirmProps
  extends IConfirmDispatchProps,
    IConfirmStateProps {}

export interface IConfirmStateProps {
  isConfirmed: boolean;

  error: boolean;
}

export interface IConfirmDispatchProps {
  /**
   * Callback when to check the confirmation token.
   * @param token    The confirmation token.
   */
  onInit: (token: string) => void;
}
