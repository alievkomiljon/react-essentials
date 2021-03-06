import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom"
import {Home, About, Events, Contact, NotFound, 
  Services, Location, CompanyHistory} from "./pages"


function App() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}>
                <Route path="services" element={<Services/>} />
                <Route path="location" element={<Location/>} />
                <Route path="history" element={<CompanyHistory/>} />
            </Route>
            <Route path="/events" element={<Events/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/*" element={<NotFound/>} />
        </Routes>
    </div>
  )
  

  
}

export default App;
