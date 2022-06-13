import { singleArticle } from "./singleArticle.js";
 export const fetchingData= (pageNumbers)=> {
    let articles = null
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit="+pageNumbers)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            articles = data;
            articles.forEach((value) => {
              singleArticle(value)
            })
        })
};

export const fetchingSingleData = (pageNumbers)=> {

    fetch("https://api.spaceflightnewsapi.net/v3/articles/"+pageNumbers)
        .then(res => res.json())
        .then(data => {
            singleArticle(data)
        })
};
