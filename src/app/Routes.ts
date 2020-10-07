export class Routes {
  CheckEmail: string;
  Login: string;
  Logout: string;
  ResetPassword: string;
  Register:string;
  Home: string;
  Days: (id: string)=> string;
}

export const AppRoutes: Routes = {
  CheckEmail: "/checkEmail",
  Login: "/login",
  Logout: "/logout",
  ResetPassword: "/resetPassword",
  Register: "/register",
  Home: "/app",
  Days: (id: string)=> `/app/days/${id}`
};
