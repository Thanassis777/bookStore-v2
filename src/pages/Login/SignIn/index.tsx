import {Form, Formik} from 'formik';
import {Button, Col, Row} from 'react-bootstrap';
import {getFormComponent} from '../../../shared/utilities';
import {initialSignInForm, initialSignInState, SignInProps} from '../formModel';
import FormWrapper from '../../../hocs/FormWrapper';
import {signInFormValidationSchema} from '../validationSchema';

const SignIn = () => {
    const handleSignIn = () => {};

    return (
        <FormWrapper
            title="Already have an account?"
            subtitle="Sign in with your email and password"
        >
            <Formik<SignInProps>
                validationSchema={signInFormValidationSchema}
                initialValues={initialSignInState}
                onSubmit={() => {}}
            >
                {({handleSubmit}) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Row className="pt-1">
                                <Row className="flex-column">
                                    {initialSignInForm.map((item, idx: number) => (
                                        <Col key={idx}>{getFormComponent(item)}</Col>
                                    ))}
                                </Row>
                                <Col>
                                    <Button
                                        className="mt-3"
                                        variant="secondary"
                                        onClick={handleSignIn}
                                    >
                                        Sign In
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

export default SignIn;
