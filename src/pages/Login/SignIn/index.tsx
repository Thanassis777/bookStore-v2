import {Form, Formik} from 'formik';
import {Button, Col, Row} from 'react-bootstrap';
import {getFormComponent, notifyToast} from '../../../shared/utilities';
import {initialSignInForm, initialSignInState, SignInProps} from '../formModel';
import FormWrapper from '../../../hocs/FormWrapper';
import {signInFormValidationSchema} from '../validationSchema';
import {useAppDispatch} from '../../../store/storeHooks';
import {signInWithUser} from '../../../store/user';
import {ToastContainer} from 'react-toastify';
import ToastMessage from '../../../hocs/ToastMessage';
import {unwrapResult} from '@reduxjs/toolkit';
import {ToastTypes} from '../../../shared/models/ApplicationTypes';

const SignIn = () => {
    const dispatch = useAppDispatch();

    const handleSignIn = (values: SignInProps) => {
        dispatch(signInWithUser(values))
            .then(unwrapResult) // use 'unwrapResult' to extract the result  from either fulfilled/ rejected result
            .then(() => {
                notifyToast(ToastTypes.SUCCESS, 'Successfully signed in');
            })
            .catch((err: Error) => notifyToast(ToastTypes.ERROR, err.message));
    };

    return (
        <FormWrapper
            title="Already have an account?"
            subtitle="Sign in with your email and password"
        >
            <ToastMessage>
                <Formik<SignInProps>
                    validationSchema={signInFormValidationSchema}
                    initialValues={initialSignInState}
                    onSubmit={handleSignIn}
                >
                    {({handleSubmit}) => (
                        <Form onSubmit={handleSubmit}>
                            <Row className="pt-1">
                                <Row className="flex-column">
                                    {initialSignInForm.map((item, idx: number) => (
                                        <Col key={item.id + 'signIn'}>{getFormComponent(item)}</Col>
                                    ))}
                                </Row>
                                <Col>
                                    <Button
                                        type="submit"
                                        className="mt-3"
                                        variant="outline-primary"
                                    >
                                        Sign In
                                    </Button>
                                </Col>
                            </Row>
                            <ToastContainer />
                        </Form>
                    )}
                </Formik>
            </ToastMessage>
        </FormWrapper>
    );
};

export default SignIn;
