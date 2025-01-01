import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <>
            <AuthLayout title="Login" paragraph="Welcome, Please enter your details">
                <FormLogin/>
            </AuthLayout>
        </>
    )
}

export default LoginPage;