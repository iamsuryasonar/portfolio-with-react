import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './App/Pages/Home/Home_page'
import Projects from './App/Pages/Projects/Projects_page'
import Links from './App/Pages/Links/Links_page'
import Skills from './App/Pages/Skills/Skills_page'
import NavBar from './App/Components/NavBar/NavBar'


function Container() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/links' element={<Links></Links>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
