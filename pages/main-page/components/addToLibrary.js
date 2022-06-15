export function addToLibary(e) {
    if(e.target.name==="isInLibrary"){
        window.localStorage.removeItem(e.target.id)
        e.target.innerText="Add to Library"
        e.target.name="isntInLibrary"
    }
    else{
        fetch('https://api.spaceflightnewsapi.net/v3/articles/' + e.target.id)
        .then(res => res.json())
        .then(data => {
            addToLocalStorage(data)

        })
        e.target.name="isInLibrary"
        e.target.innerText="Remove from library"
    }
}

const addToLocalStorage = (article) => {
    let articleObject = { 
            id: article.id, 
            title: article.title,
            publishedAt: article.publishedAt,
            summary: article.summary,
            newsSite:article.newsSite
        }
    articleObject=JSON.stringify(articleObject)
    window.localStorage.setItem(article.id,articleObject);
}