import {Form, Formik} from 'formik';
import {initialSignUpForm, initialSignUpState, SignInProps} from '../formModel';
import {Button, Col, Row} from 'react-bootstrap';
import {getFormComponent} from '../../../shared/utilities';
import FormWrapper from '../../../hocs/FormWrapper';
import {signUpFormValidationSchema} from '../validationSchema';

const SignUp = () => {
    const handleSignUp = () => {};

    return (
        <FormWrapper title="Don't have an account?" subtitle="Sign up with your email and password">
            <Formik<SignInProps>
                initialValues={initialSignUpState}
                validationSchema={signUpFormValidationSchema}
                onSubmit={() => {}}
            >
                {({handleSubmit}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Row className="align-items-center">
                                <Row className="flex-column">
                                    {initialSignUpForm.map((item, idx: number) => (
                                        <Col key={idx}>{getFormComponent(item)}</Col>
                                    ))}
                                </Row>
                                <Col>
                                    <Button
                                        className="mt-3"
                                        variant="secondary"
                                        onClick={handleSignUp}
                                    >
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
