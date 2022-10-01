//PARENT COMPONENT
import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import Albums from './components/albums/main.albums';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MainLayout from './components/layouts/main.layouts';
import Navigation from './components/layouts/navigation.layouts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function testing() {
//   return <h1>TEsting</h1>
// }

//SAMA PERSIS SEPERTI MENGGUNAKAN CONST
// function App2(){
//   return (
//     <div>
//       <h1>testing</h1>
//     </div>
//   )
// }

const App2 = () => {
  // const [limit, setLimit] = useState(1);
  // const[getName, setName] = useState("Arno")
  // const inputNameRef = useRef(getName);

  // useEffect(()=>{
  //   // setName("Ganti nama")
  //   // console.log("input ref: ", inputNameRef.current.value)
  //   setName(inputNameRef.current.value)
  // },[limit])//TANDA '[]' UNTUK MENGHINDARI RENDER YANG BERULANG DI PAGE YANG SAMA, SEPERTI HALAMAN DI REFRESH

  // const[buttonClicked, setButtonClick] = useState("Default");
  // function handleButtonClick(){
  //   setButtonClick("Boom!")
  // }

  return (
    <>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<h1>HOMEPAGE</h1>} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<h1>POSTING</h1>} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Routes>
        </Router>
      </MainLayout>
    </>
    // {/* <h1>testing</h1>
    // <center>
    //   {/* {getName}
    //   {limit} */}
    //   {/* <br /> */}
    //   {/* <button onClick={handleButtonClick}>{buttonClicked}</button> */}
    //   {/* <input placeholder='input here' ref={inputNameRef} defaultValue={inputNameRef.current}/> */}
    //   {/* <button onClick={()=> setLimit(limit-1)}>Click</button> */}
    //   {/* <br/> */}
    //   {/* <button onClick={() => setLimit(limit + 1)}>Naikkan limit</button>
    //   <button onClick={() => setLimit(limit - 1)}>Turunkan limit</button> */}
    // </center>
    // <Testing title="Selamat datang" desc="Welcome Welcome"/> */}
  )
}

// function App() {
//   return (
//     <React.Fragment>
//       <div>
//         <h1>
//           Testing
//         </h1>
//       </div>
//       {/* {testing()} */}
//     </React.Fragment>
//   );
// }

//CONTOH PENGGUNAAN CLASS, RIBET
// class App extends React.Component {
//   render(){
//   return (
//     <h1>
//       DOR
//     </h1>
//       )
//   }
// }

//EXPORT DEFAULT ADALAH MENENTUKAN YANG PERTAMA DIRENDER
export default App2;
