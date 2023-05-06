import React, {useContext, useEffect} from "react";
import NewsStore from "../../stores/NewsStore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Spin } from 'antd';

import "./styles.css";

const NewsList = () => {
    const newsStore = useContext(NewsStore);
    const { news, refreshNews } = newsStore;

    useEffect(()=>{
            refreshNews();
    },[])

    return (
        <div className="list">
            <button className="refreshButton" onClick={refreshNews}>Refresh</button>
            <div className="listCards">
                {news.length === 0 ? <Spin /> : <div />}
                {news?.map((item) => (
                    <Link className="listLink" to="/modal" state = {{ id : item.id }}>
                    <div key={item.id} className="card">
                        <div className="name">{item.name}</div>
                        <div className="rating">{item.rating}</div>
                        <div className="author">{item.author}</div>
                        <div className="date">{item.date.toString()}</div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default observer(NewsList);

