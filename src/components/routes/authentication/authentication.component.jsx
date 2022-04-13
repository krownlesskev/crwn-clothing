import SignUpForm from '../../sign-up-form/sign-up-form.component';
import SignInForm from '../../sign-in-form/sign-in-form.component';

const Authentication = () => {
    return (
        <div>
            <h1>Sign in Page</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication