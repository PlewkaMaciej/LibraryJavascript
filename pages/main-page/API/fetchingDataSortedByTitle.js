import { singleArticle } from "../components/singleArticle.js";
let articles = null
 export const fetchingDataSortedByTitle= (pageNumbers)=> {
    
    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit="+pageNumbers+"&_sort=title")
        .then(res => res.json())
        .then(data => {
            articles = data;
            articles.forEach((value) => {
              singleArticle(value)
            })
        })
};

export const fetchingSingleDataSortedByTitle = (pageNumbers)=> {

    fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=1&_sort=title&_start="+pageNumbers)
        .then(res => res.json())
        .then(data => {
            singleArticle(data[0])
        })
};
