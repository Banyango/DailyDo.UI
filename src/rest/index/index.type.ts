import { Link } from "../link";

export type IIndexResource = {
  _links: {
    /**
     * Request to get tasks.
     */
    tasks: Link;

    /**
     * Request to login.
     */
    login: Link;

    /**
     * Request to register.
     */
    register: Link;

    /**
     * Request to logout.
     */
    logout: Link;

    /**
     * Request to confirm account.
     */
    confirm: Link;

    /**
     * Request to reset password.
     */
    forgotPassword: Link;

    /**
     * Request to confirm reset password.
     */
    confirmResetPassword: Link;

    /**
     * Request to get self user.
     */
    me: Link;
  };
};
