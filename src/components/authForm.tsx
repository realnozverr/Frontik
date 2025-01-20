import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Button, Form, Input } from "antd";
import { Store } from "../store/index.ts";

const AuthForm: FC = observer(() => {
    const { isLoading, message, messageType } = Store.getInstance();

    const submit = async (values: { code: string }) => {
        await Store.getInstance().authorization(values.code);
    };

    const messageStyle = {
        color: messageType === "success" ? "green" : messageType === "error" ? "red" : "inherit",
        marginBottom: "10px", 
    };

    return (
        <Form onFinish={submit}>
            {message && (
                <div style={messageStyle}>
                    {message}
                </div>
            )}

            <Form.Item
                label="Код"
                name="code"
                rules={[{ required: true, message: "Пожалуйста, введите ваш код!" }]}
            >
                <Input type="text" placeholder="Введите ваш код" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    проверить код!
                </Button>
            </Form.Item>
        </Form>
    );
});

export default AuthForm;