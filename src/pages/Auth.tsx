import { Layout, Row } from "antd";
import React, {FC} from "react";
import AuthForm from "../components/authForm.tsx";

const Auth: FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="h100">
                <AuthForm/>
            </Row>
        </Layout>
    );
};

export default Auth