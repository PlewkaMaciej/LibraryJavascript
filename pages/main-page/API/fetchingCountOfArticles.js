const howManyArticlesFetches = document.querySelector(".howManyArticlesFetches-paragraph")
export const fetchingCountData= (pageNumber)=> {

    fetch('https://api.spaceflightnewsapi.net/v3/articles/count')
        .then(res => res.json())
        .then(data => {

            howManyArticlesFetches.innerHTML= pageNumber+"/"+data
        })
};

