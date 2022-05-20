import './App.css';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from './components/Navbar.js';
import {About} from './components/About.js';
import {Alert} from './components/Alert.js';
import {CompanyPricesByDate} from './components/CompanyPricesByDate'
import {AllCompanyLatestStockPrice} from './components/AllCompanyLatestStockPrice'

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() =>{
            setAlert(null)},3000)
    }

    const toggleMode = ()=>{
        if(mode === 'light')
        {
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success");
        }
        else
        {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    }

      return (
            <>
            <BrowserRouter>
                <Navbar mode={mode} toggleMode={toggleMode}/>
                <Alert alert={alert}/>
                <Routes>
                    <Route exact path="/" element={<AllCompanyLatestStockPrice mode={mode}/>} />
                    <Route exact path="/about" element={<About mode={mode}/>} />
                    <Route exact path="/getCompanyStockDetails" element={<CompanyPricesByDate mode={mode}/>} />
                </Routes>
            </BrowserRouter>
            </>
            )
    }

export default App;