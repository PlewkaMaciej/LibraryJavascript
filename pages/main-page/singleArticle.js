const container = document.querySelector(".articles-container");
export const singleArticle = (value) => {
    let singleArticleContainer = document.createElement("div");
    let title = document.createElement("p");
    let summary = document.createElement("p");
    let publishedAt = document.createElement("p");
    let newsSite = document.createElement("a");
    title.innerHTML = "Title: " + value.title
    newsSite.innerHTML = "Go to news Site " + value.newsSite
    newsSite.href = value.url
    if(value.summary.length>0){
        summary.innerHTML = "Summary: " + value.summary.substring(0, 200)
    }
    publishedAt.innerHTML = "Published: " + value.publishedAt.substring(0, 10)
    singleArticleContainer.classList.add("single-article-container");
    summary.classList.add("summary-paragraph");
    publishedAt.classList.add("classic-paragraph");
    title.classList.add("classic-paragraph");
    newsSite.classList.add("classic-paragraph");
    container.appendChild(singleArticleContainer)
    singleArticleContainer.appendChild(title)
    singleArticleContainer.appendChild(publishedAt)
    singleArticleContainer.appendChild(summary)
    singleArticleContainer.appendChild(newsSite)
}