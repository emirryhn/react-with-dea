//CHILDREN COMPONENT
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Collection from "./collection.album";

const Albums = (props) => {

    //DIPINDAHIN KE COLLECTION
    // const[datas,setDatas] = useState([]);

    // useEffect(() => {
    //     axios({
    //         method: "GET",
    //         url: `${process.env.REACT_APP_BASEURL}/photos`
    //     }).then((result)=>setDatas(result.data))
    //     //// 'process.env' ADALAH VARIABLE DEFAULT KONSEP .env
    //     // console.log(process.env.REACT_APP_BASEURL)
    // }, [])

    // console.log(datas[0])

    // console.log(props.title)
    // console.log(props.desc)
    return (
        <React.Fragment>
            <Container className="mt-2">
                <Collection/>
                <h3>{props.title}</h3>
                <i>{props.desc}</i>
            </Container>
        </React.Fragment>
    )
}

export default Albums;