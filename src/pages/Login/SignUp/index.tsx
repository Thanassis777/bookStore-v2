import {Form, Formik} from 'formik';
import {ILogin, initialSignUpForm, initialSignUpState} from '../formModel';
import {Button, Col, Row} from 'react-bootstrap';
import {getFormComponent, notifyToast} from '../../../shared/utilities';
import FormWrapper from '../../../hocs/FormWrapper';
import {signUpFormValidationSchema} from '../validationSchema';
import {signUpUser} from '../../../store/user';
import {unwrapResult} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../../store/storeHooks';
import {ToastTypes} from '../../../shared/models/ApplicationTypes';
import {ToastPosition} from 'react-toastify';

const SignUp = () => {
    const dispatch = useAppDispatch();

    const opt = {
        position: 'bottom-right' as ToastPosition,
    };

    const handleSignUp = (values: ILogin) => {
        dispatch(signUpUser(values))
            .then(unwrapResult)
            .then(() =>
                notifyToast(ToastTypes.SUCCESS, 'You have successfully created an account!', {
                    ...opt,
                })
            )
            .catch((err: Error) => notifyToast(ToastTypes.SUCCESS, err.message));
    };

    return (
        <FormWrapper title="Don't have an account?" subtitle="Sign up with your email and password">
            <Formik<ILogin>
                initialValues={initialSignUpState}
                validationSchema={signUpFormValidationSchema}
                onSubmit={handleSignUp}
            >
                {({handleSubmit}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Row className="align-items-center">
                                <Row className="flex-column">
                                    {initialSignUpForm.map((item, idx: number) => (
                                        <Col key={item.id + idx + 'signUp'}>
                                            {getFormComponent(item)}
                                        </Col>
                                    ))}
                                </Row>
                                <Col>
                                    <Button className="mt-3" variant="warning" type="submit">
                                        Sign Up
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    );
                }}
            </Formik>
        </FormWrapper>
    );
};

export default SignUp;
