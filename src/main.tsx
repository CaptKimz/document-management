import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {config} from './components/theme/themConfig.tsx'
import { ConfigProvider} from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ConfigProvider theme={config}>
         <App />
    </ConfigProvider>
  </React.StrictMode>,
)
