import Auth from "../pages/Auth.tsx";
import Register from "../pages/Register.tsx";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum Routes{
    REGISTER = '/register',
    AUTH = '/auth'
}
    

export const publicRoutes = [
    {path: Routes.REGISTER, exact: true, component: Register}
]

export const privateRoutes = [
    {path: Routes.AUTH, exact: true, component: Auth}
]