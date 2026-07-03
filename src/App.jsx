import React, { useState } from 'react'
import './App.css';
import LanguageSwitcher from './components/LanguageSwitcher'
import Presentation from './components/Presentation'
import Work from './components/Work'

function App() {
  const savedLanguage = localStorage.getItem("language")
  const [language, setLanguage] = useState(savedLanguage ? savedLanguage : 'norwegian')

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage)
  }
  return (
    <div className="App">
      <LanguageSwitcher handleLanguageChange={handleLanguageChange} language={language}/>
      <Presentation language={language}/>
      <Work language={language}/>
    </div>
  );
}

export default App;
