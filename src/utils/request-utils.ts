import { Action, AnyAction } from "redux";

export type HttpAction<Type = void, Payload = void> = Action & {
  /**
   *  meta options
   */
  meta: {
    /**
     * pending id.
     */
    id?: string;

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
    payload?: Payload;

    /**
     * Validate the status.
     * @param status
     */
    validateStatus?: (status: number) => boolean;

    /**
     * Callback on pending.
     * @param value
     */
    onPending?: (value: boolean, id: string) => AnyAction;

    /**
     * Callback on success.
     * @param resources
     */
    onSuccess?: (resources: Type) => AnyAction;

    /**
     * Callback on error.
     * @param error
     */
    onFailure?: (error: Error) => AnyAction;

    /**
     * True if we should ignore the authentication redirect when we get a 401 response.
     */
    ignoreAuthenticationRedirectOnError?:boolean;
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
