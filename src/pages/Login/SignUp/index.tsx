import {Form, Formik} from 'formik';
import {ILogin, initialSignUpForm, initialSignUpState} from '../formModel';
import {Button, Col, Row} from 'react-bootstrap';
import {getFormComponent, ToastUtils} from '../../../shared/utilities';
import FormWrapper from '../../../hocs/FormWrapper';
import {signUpFormValidationSchema} from '../validationSchema';
import {signUpUser} from '../../../store/user';
import {unwrapResult} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../../store/storeHooks';
import {ToastTypes} from '../../../shared/models/ApplicationTypes';
import {useState} from 'react';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';

const SignUp = () => {
    const [loadSpinner, setLoadSpinner] = useState(false);
    const dispatch = useAppDispatch();

    const handleSignUp = (values: ILogin) => {
        setLoadSpinner(true);

        setTimeout(() => {
            dispatch(signUpUser(values))
                .then(unwrapResult)
                .then(() => {
                    ToastUtils.notifyToast(
                        ToastTypes.SUCCESS,
                        'You have successfully created an account. You can now login'
                    );
                })
                .catch((err) => {
                    if (err.status === 429) ToastUtils.notifyToast(ToastTypes.WARNING, err.message);
                    else ToastUtils.notifyToast(ToastTypes.ERROR, err.message);
                })
                .finally(() => setLoadSpinner(false));
        }, 2000);
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
                                        {loadSpinner && (
                                            <LoadingSpinner
                                                variant="light"
                                                className="me-2"
                                                size="sm"
                                            />
                                        )}
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
