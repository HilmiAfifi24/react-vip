import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <>
            <AuthLayout title="Register" paragraph="Welcome, Please create account now">
                <FormRegister/>
            </AuthLayout>
        </>
    )
}

export default RegisterPage;