import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Carousel, Container } from "react-bootstrap"
import Loader from "../utilities/loaders";

const Collection = () => {
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(3);
    const [loading,setLoading] = useState(true);

    const handleLimit = (option) => {
        option === "+" ?
            setLimit((prev) => prev + 1)
            : setLimit((prev) => prev - 1)
        // if (option === "+") {
        //     setLimit((prev) => prev + 1);
        //     console.log(limit)
        // }
        // if (option === "-") {
        //     setLimit((prev) => prev - 1);
        //     console.log(limit)
        // }
    }

    useEffect(() => {
        let isCancelled = false;

        if (isCancelled === false) {
            setLoading(true)
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`
            }).then((result) => setDatas(result.data)).catch((err)=>console.log(err)).finally(()=> setLoading(false))
            //CLEAN UP RENDER
            return () => { isCancelled = true }
        }
        //// 'process.env' ADALAH VARIABLE DEFAULT KONSEP .env
        // console.log(process.env.REACT_APP_BASEURL)
    }, [limit])

    // if(loading) return <h3 className="text-center text-primary">Loading...</h3>
    if(loading) return <Loader/>

    return (
        <React.Fragment>
            {/* <h1>COLLECTION</h1> */}
            <h2>{limit} collection</h2>
            <Carousel>
                {/*
                'data' adalah jumlah original dari data array, sifatnya banyak
                'i' adalah index atau array keberapa
                */}
                {datas.map((data, i) => {
                    return (
                        // 'id' berfugsi sebagai unique identifier, untuk mengetahu data yang berubah
                        // <div key={i}>
                        //     <h1>{data.title}</h1> 
                        // </div>
                        <Carousel.Item key={i}>
                            <img
                                className="d-block w-70"
                                src={data.url}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>{data.title}</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <ButtonGroup>
                <Button className="btn btn-btn-outline-primary" onClick={() => handleLimit("+")}>+</Button>
                {limit > 1 &&
                    <Button className="btn btn-btn-outline-primary" onClick={() => handleLimit("-")}>-</Button>
                }
            </ButtonGroup>
        </React.Fragment>
    )
}

export default Collection;