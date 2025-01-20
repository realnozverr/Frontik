import React, {FC} from "react";
import {Layout, Row, Menu} from "antd";
import {useHistory} from 'react-router-dom';
import { Routes } from "../router/index.ts";
import { observer } from 'mobx-react-lite';
import {Store} from "../store/index.ts";
import logo from "../images/monkey.svg";


const Navbar:FC = observer(() => {
    const { regAuth } = Store.getInstance();
    const router = useHistory()
    return (
        <Layout.Header>
            <Row justify="space-between" align="middle">
                {regAuth
                ?
                <>
                <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo} 
                        alt="logo" 
                        style={{
                            height: "40px", 
                            marginRight: "10px"
                        }} 
                    />
                </div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item 
                    onClick={ () => router.push(Routes.REGISTER)} 
                    key={1}>
                    Регистрация
                    </Menu.Item>
                    <Menu.Item 
                    onClick={ () => router.push(Routes.AUTH)} 
                    key={2}>
                    Аунтефикация
                    </Menu.Item>
                    <Menu.Item 
                    onClick={ () => console.log('выйти')} 
                    key={3}>
                    Другая почта
                    </Menu.Item>
                </Menu> 
                </> 
                :
                <>
                <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo} 
                        alt="logo" 
                        style={{
                            height: "40px", 
                            marginRight: "10px"
                        }} 
                    />
                </div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item 
                    onClick={ () => router.push(Routes.REGISTER)} 
                    key={1}>
                    Регистрация
                    </Menu.Item>
                </Menu> 
                </>
                }     
            </Row>
        </Layout.Header>
    );
});

export default Navbar