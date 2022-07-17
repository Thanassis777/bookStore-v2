import {Form, Formik} from 'formik';
import {ILogin, initialSignUpForm, initialSignUpState} from '../formModel';
import {Button, Col, Row} from 'react-bootstrap';
import {errorToast, getFormComponent, successToast} from '../../../shared/utilities';
import FormWrapper from '../../../hocs/FormWrapper';
import {signUpFormValidationSchema} from '../validationSchema';
import {signUpUser} from '../../../store/user';
import {unwrapResult} from '@reduxjs/toolkit';
import {useAppDispatch} from '../../../store/storeHooks';

const SignUp = () => {
    const dispatch = useAppDispatch();

    const handleSignUp = (values: ILogin) => {
        dispatch(signUpUser(values))
            .then(unwrapResult)
            .then(() => {
                successToast('You have successfully created an account!');
            })
            .catch((err: Error) => errorToast(err.message));
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
                                    <Button className="mt-3" variant="secondary" type="submit">
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
