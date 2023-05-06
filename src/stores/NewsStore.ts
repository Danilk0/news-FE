import { action, runInAction , makeAutoObservable} from "mobx"
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
                runInAction(()=>{
                    this.news=data;
                })
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export default createContext(new NewsStore());
