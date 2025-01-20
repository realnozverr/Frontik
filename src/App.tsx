import React, {FC} from 'react';
import './App.css';
import AppRouter from './components/AppRouter.tsx';
import Navbar from './components/Navbar.tsx';
import {Layout} from "antd";

const App:FC = () =>{
  return (
    <div>
      <Navbar/>
      <Layout.Content>
          <AppRouter/>
      </Layout.Content>
      
    </div>
  )
}

export default App;
