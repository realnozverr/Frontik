import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { Button, Form, Input } from "antd";
import { Store } from "../store/index.ts";

const RegisterForm: FC = observer(() => {
    const { isLoading, message, messageType } = Store.getInstance();

    const submit = async (values: { email: string }) => {
        await Store.getInstance().registration(values.email);
    };

    // Меняем стиль сообщения в зависимости от типа
    const messageStyle = {
        color: messageType === "success" ? "green" : messageType === "error" ? "red" : "inherit",
        marginBottom: "10px", // Пространство для аккуратного отображения
    };

    return (
        <Form onFinish={submit}>
            {/* Вывод сообщения (динамическая окраска) */}
            {message && (
                <div style={messageStyle}>
                    {message}
                </div>
            )}

            {/* Поле для ввода email */}
            <Form.Item
                label="Почта"
                name="email"
                rules={[{ required: true, message: "Пожалуйста, введите вашу почту!" }]}
            >
                <Input type="email" placeholder="Введите вашу почту" />
            </Form.Item>

            {/* Кнопка отправки */}
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Отправить код!
                </Button>
            </Form.Item>
        </Form>
    );
});

export default RegisterForm;
