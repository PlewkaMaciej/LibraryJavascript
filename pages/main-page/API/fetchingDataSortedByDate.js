import { singleArticle } from "../components/singleArticle.js";
let articles = null
 export const fetchingDataSortedByDate= (pageNumbers)=> {
    
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit="+pageNumbers+"&_sort=publishedAt")
        .then(res => res.json())
        .then(data => {
            articles = data;
            articles.forEach((value) => {
              singleArticle(value)
            })
        })
};

export const fetchingSingleDataSortedByDate = (pageNumbers)=> {

    fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=1&_sort=publishedAt&_start=10'+pageNumbers)
        .then(res => res.json())
        .then(data => {
            singleArticle(data[0])
        })
};
