import { Action, AnyAction } from "redux";

export type HttpAction<T = void, P = void> = Action & {
  /**
   *  meta options
   */
  meta: {
    /**
     * type of request.
     */
    type: "http";

    /**
     * Http method.
     */
    method: "get" | "put" | "post" | "options" | "head" | "delete";

    /**
     * The url.
     */
    href: string;

    /**
     * Http headers.
     */
    headers?: [];

    /**
     * Optional payload body.
     */
    payload?: P;

    /**
     * Validate the status.
     * @param status
     */
    validateStatus?: (status: number) => boolean;

    /**
     * Callback on pending.
     * @param value
     */
    onPending?: (value: boolean) => AnyAction;

    /**
     * Callback on success.
     * @param resources
     */
    onSuccess: (resources: T) => AnyAction;

    /**
     * Callback on error.
     * @param error
     */
    onFailure?: (error: Error) => AnyAction;
  };
};

export const httpAction = (method: string) => ({
  pending: forHttp(method),
  success: forHttp(method),
  failure: forHttp(method),
});

const forHttp = (method: string) => (name: string): string => {
  return `${name}_${method}`;
};

const pending = forHttp("PENDING");
const success = forHttp("SUCCESS");
const failure = forHttp("FAILURE");
