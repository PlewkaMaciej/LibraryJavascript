import { singleArticle } from "../components/singleArticle.js";
let articles = null
 export const fetchingData= ()=> {
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=15")
        .then(res => res.json())
        .then(data => {
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
