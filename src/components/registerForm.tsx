import React, {FC} from 'react';
import {Button, Form, Input} from "antd";

const RegisterForm: FC = () => {
    return (
    <Form>
        <Form.Item
            label="Почта"
            name="email"
            rules={[{ required: true, message: 'Пожалуйста введите вашу почту!' }]}
            >
            <Input />
        </Form.Item>
        <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Отправить код!
            </Button>
        </Form.Item>
    </Form>
    )
}

export default RegisterForm;