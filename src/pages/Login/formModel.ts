import {ComponentProps} from '../../shared/models/ComponentProps';

export interface ILogin {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
}

export type SignInProps = Pick<ILogin, 'email' | 'password'>;

export const initialSignInState: SignInProps = {
    email: '',
    password: '',
};

export const initialSignInForm: ComponentProps[] = [
    {
        label: 'Email',
        id: 'emailSignIn',
        name: 'email',
    },
    {
        label: 'Password',
        id: 'password',
        name: 'password',
        type: 'password',
    },
];

export const initialSignUpState: ILogin = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
};

export const initialSignUpForm: ComponentProps[] = [
    {
        label: 'Email',
        id: 'emailSignUp',
        name: 'email',
    },
    {
        label: 'Password',
        id: 'passwordSignUp',
        name: 'password',
        type: 'password',
    },
    {
        label: 'Confirm Password',
        id: 'confirmPassword',
        name: 'confirmPassword',
        type: 'password',
    },
    {
        label: 'Full Name',
        id: 'fullName',
        name: 'name',
    },
];
