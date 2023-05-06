import React, {useEffect, useState} from "react";
import { Link} from "react-router-dom";
import { useLocation } from 'react-router-dom'

import "./styles.css";

export interface IModalNews {
    id?: number;
    link: string;
    title: string;
    counter: number;
    date: Date;
}

const News = ()=>{
    const location = useLocation()
    let { id } = location.state;
    const [news,setNews]=useState<IModalNews>();

    useEffect(()=>{
            fetch(`http://localhost:8080/v0/news/${id}`)
                .then((response) => response.json())
                .then((data) => {
                    setNews(data);
                })
                .catch((error) => {
                    console.log(error);
                });
    }, [])

    return(
        <div className="modal">
            <Link to="/" className='close'>close</Link>
            <div className="title">
                {news?.title}
            </div>
            <a className="link" href={news?.link}>Source</a>
            <div className="date">
                Date of public: {news?.date.toString()}
            </div>
            <div className="counter">
                Comment counter: {news?.counter}
            </div>
        </div>
    )
}

export default News;