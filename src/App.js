import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home';
import ReadNews from './components/readNews';
import SearchedNews from './components/searchedNews';


function App() {
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
      </Routes>
    </div>
  )
}

export default App;