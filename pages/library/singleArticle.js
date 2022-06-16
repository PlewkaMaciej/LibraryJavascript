import { removeFromlibrary } from "./removeFromlibrary.js";
const container = document.querySelector(".container-for-all-article");

export const singleArticle = (singleArticle) => {
    let singleArticleContainer = document.createElement("div");
    let title = document.createElement("p");
    let summary = document.createElement("p");
    let publishedAt = document.createElement("p");
    let newsSite = document.createElement("a");
    let removeFromLibraryButton = document.createElement("button");

    title.innerHTML = "Title: " + singleArticle.title
    newsSite.innerHTML = "Go to news Site " + singleArticle.newsSite
    newsSite.href = singleArticle.url
    if (singleArticle.summary.length > 0) {
        summary.innerHTML = "Summary: " + singleArticle.summary.substring(0, 200)
    }
    publishedAt.innerHTML = "Published: " + singleArticle.publishedAt.substring(0, 10)


    removeFromLibraryButton.classList.add("classic-button")
    singleArticleContainer.classList.add("single-article-container");
    removeFromLibraryButton.innerText = "Remove from library"
    summary.classList.add("summary-paragraph");
    publishedAt.classList.add("classic-paragraph");
    title.classList.add("classic-paragraph");
    newsSite.classList.add("newSite-paragraph");

    removeFromLibraryButton.id = singleArticle.id
    singleArticleContainer.id=singleArticle.id

    container.appendChild(singleArticleContainer)
    singleArticleContainer.appendChild(title)
    singleArticleContainer.appendChild(publishedAt)
    singleArticleContainer.appendChild(summary)
    singleArticleContainer.appendChild(newsSite)
    singleArticleContainer.appendChild(removeFromLibraryButton)
    
    removeFromLibraryButton.name="isInLibrary"
const removeContainer =(e)=>{
    let element = document.getElementById(e.target.id);
    element.parentNode.removeChild(element);
}
    removeFromLibraryButton.addEventListener("click", removeFromlibrary)
    removeFromLibraryButton.addEventListener("click", removeContainer)
}

