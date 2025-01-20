import { Layout, Row } from "antd";
import React, {FC} from "react";
import RegisterForm from "../components/registerForm.tsx";

const Register: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <RegisterForm/>
            </Row>
        </Layout>
    );
};

export default Register