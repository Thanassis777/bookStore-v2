import {Form, Formik} from 'formik';
import {Button, Col, Row} from 'react-bootstrap';
import {getFormComponent, ToastUtils} from '../../../shared/utilities';
import {initialSignInForm, initialSignInState, SignInProps} from '../formModel';
import FormWrapper from '../../../hocs/FormWrapper';
import {signInFormValidationSchema} from '../validationSchema';
import {useAppDispatch} from '../../../store/storeHooks';
import {signInWithUser} from '../../../store/user';
import {ToastContainer} from 'react-toastify';
import {unwrapResult} from '@reduxjs/toolkit';
import {ToastTypes} from '../../../shared/models/ApplicationTypes';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
import {useState} from 'react';
import {useNavigate} from 'react-router';

const SignIn = () => {
    const [loadSpinner, setLoadSpinner] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignIn = (values: SignInProps) => {
        setLoadSpinner(true);

        setTimeout(() => {
            dispatch(signInWithUser(values))
                .then(unwrapResult) // use 'unwrapResult' to extract the result  from either fulfilled/ rejected result
                .then(() => {
                    ToastUtils.notifyToast(ToastTypes.SUCCESS, 'Successfully signed in');
                    navigate('/search');
                })
                .catch((err: Error) => ToastUtils.notifyToast(ToastTypes.ERROR, err.message))
                .finally(() => setLoadSpinner(false));
        }, 2000);
    };

    return (
        <FormWrapper
            title="Already have an account?"
            subtitle="Sign in with your email and password"
        >
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
                                <Button type="submit" className="mt-3" variant="outline-primary">
                                    {loadSpinner && (
                                        <LoadingSpinner
                                            variant="primary"
                                            className="me-2"
                                            size="sm"
                                        />
                                    )}
                                    Sign In
                                </Button>
                            </Col>
                        </Row>
                        <ToastContainer />
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    );
};

export default SignIn;
