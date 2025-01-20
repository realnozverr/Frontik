import React, {FC} from 'react';
import { observer } from 'mobx-react-lite';
import {Button, Form, Input} from "antd";
import {Store} from "../store/index.ts";

const RegisterForm: FC = observer(() => {

    const { isLoading, error, sucess } = Store.getInstance();
    const submit = async (values: { email: string }) => {
        await Store.getInstance().registration(values.email)
    }
    return (
    <Form
    onFinish={submit}>
        {error && <div style={{color: 'red'}}>
                {error}
            </div>}
        {sucess && <div style={{ color: 'green' }}>
            {sucess}</div>}
        <Form.Item
            label="Почта"
            name="email"
            rules={[{ required: true, message: 'Пожалуйста введите вашу почту!' }]}
            >
            <Input type="email" placeholder="Введите вашу почту" />
        </Form.Item>
        <Form.Item label={null}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
                Отправить код!
            </Button>
        </Form.Item>
    </Form>
    );
});

export default RegisterForm;