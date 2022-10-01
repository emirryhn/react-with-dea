import { Container } from "react-bootstrap";
import React from "react";
import Navigation from "./navigation.layouts";
import Collection from "../albums/collection.album";

//NAMA 'CHILDREN' SUDAH DEFAULT DARI COMPONENTNYA
const MainLayout = ({children}) => {
    return (
        <Container>
            <Navigation/>
            {children}
            {/* <Collection/> */}
            {/* <h1>MAIN LAYOUT</h1> */} 
        </Container>
    //     <div>
    //         <h1>Layout</h1>
    //     </div>
    )
}

export default MainLayout;