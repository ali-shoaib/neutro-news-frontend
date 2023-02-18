import React from 'react'
import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'
import AlertMessage from './components/alertMessage';
import GoTop from './components/goTop';
import Home from './components/home';
import ReadNews from './components/readNews';
import SearchedNews from './components/searchedNews';


function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  },[]);
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Dashboard />}/>
        <Route path='project/:id' element={<ProjectDetails />} />
        <Route path="signin" element={<SignIn />}/>
        <Route path="signup" element={<SignUp />}/> */}
        <Route path="/" element={<Home />}/>
        <Route path="/searched-news" element={<SearchedNews />}/>
        <Route path="/read-news/:id" element={<ReadNews />}/>
        <Route path="/msg" element={<AlertMessage />}/>
      </Routes>
      <GoTop />
    </div>
  )
}

export default App;