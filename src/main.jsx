import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/HomePage'
import FirstPage from '/src/pages/FirstPage'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import DeckPage from './pages/DeckPage'
import CardSelectionPage from './pages/CardSelectionPage'
import DescriptionPage from './pages/DescriptionPage'
import SettingPage from './pages/SettingsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/sigup" element={<RegistrationPage/>}/>
        <Route path="/deck" element={<DeckPage/>}/>
        <Route path="/cardselection" element={<CardSelectionPage/>}/>
        <Route path="/description" element={<DescriptionPage/>}/>
        <Route path="/setting" element={<SettingPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
