import { observable, action, runInAction , makeAutoObservable} from "mobx"
import { createContext } from "react"

export interface IPreviewNews {
    id?: number;
    name: string;
    rating: number;
    author: string;
    date: Date;
}

class NewsStore {
    constructor() {
        makeAutoObservable(this);
    }

    news: IPreviewNews[] = [];

    @action.bound refreshNews = () => {
        fetch("http://localhost:8080/v0/news")
            .then((response) => response.json())
            .then((data) => {
                console.log('before')
                console.log(this.news);

                runInAction(()=>{
                    this.news=data;
                })
                console.log("news");
                console.log(this.news);
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export default createContext(new NewsStore());
