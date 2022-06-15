export const fetchingCountData= (countOfArticles)=> {
    fetch('https://api.spaceflightnewsapi.net/v3/articles/count')
        .then(res => res.json())
        .then(data => {
            countOfArticles = data;
        })
};

