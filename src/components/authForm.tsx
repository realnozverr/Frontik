import React, {FC} from 'react';
import {Button, Form, Input} from "antd";

const AuthForm: FC = () => {
    return (
    <Form>
        <Form.Item
            label="Код"
            name="Code"
            rules={[{ required: true, message: 'Пожалуйста введите ваш код!' }]}
            >
            <Input />
        </Form.Item>
        <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Проверить код!
            </Button>
        </Form.Item>
    </Form>
    )
}

export default AuthForm;