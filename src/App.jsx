import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Company from './pages/Company'
import Header from './layout/Header'
import './App.css'
import AddCompany from './pages/AddCompany'
import AddEmploye from './pages/AddEmploye'
import AddManager from './pages/AddManager'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className='container py-5'>
        <div className='row justify-content-center '>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<Company />} />
              <Route path='/addcompany' element={<AddCompany />} />
              <Route path='/addmanager' element={<AddManager />} />
              <Route path='/addemploye' element={<AddEmploye />} />
            </Routes>
            <ToastContainer />
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
