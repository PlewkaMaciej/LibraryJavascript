
import { addToLibary } from "./addToLibrary.js";
const container = document.querySelector(".container-for-all-article");

export const singleArticle = (singleArticle) => {
    let articlesInStorage = { ...window.localStorage };


    let singleArticleContainer = document.createElement("div");
    let title = document.createElement("p");
    let summary = document.createElement("p");
    let publishedAt = document.createElement("p");
    let newsSite = document.createElement("a");
    let addToLibraryButton = document.createElement("button");

    title.innerHTML = "Title: " + singleArticle.title
    newsSite.innerHTML = "Go to news Site " + singleArticle.newsSite
    newsSite.href = singleArticle.url
    if (singleArticle.summary.length > 0) {
        summary.innerHTML = "Summary: " + singleArticle.summary.substring(0, 200)
    }
    publishedAt.innerHTML = "Published: " + singleArticle.publishedAt.substring(0, 10)

    addToLibraryButton.classList.add("classic-button")
    singleArticleContainer.classList.add("single-article-container");
    addToLibraryButton.innerText = "Add to library"
    summary.classList.add("summary-paragraph");
    publishedAt.classList.add("classic-paragraph");
    title.classList.add("classic-paragraph");
    newsSite.classList.add("newSite-paragraph");

    let isInLibrary = false
    Object.values(articlesInStorage).forEach((articlesInStorage) => {
        if (JSON.parse(articlesInStorage).id === singleArticle.id) {
            isInLibrary = true
        }
    })
    if(isInLibrary){
        addToLibraryButton.name="isInLibrary"
        addToLibraryButton.innerText="Remove from Library"
    }
    else{
        addToLibraryButton.name="isntInLibrary"
        addToLibraryButton.innerText="Add to Library"

    }

    addToLibraryButton.id = singleArticle.id

    container.appendChild(singleArticleContainer)
    singleArticleContainer.appendChild(title)
    singleArticleContainer.appendChild(publishedAt)
    singleArticleContainer.appendChild(summary)
    singleArticleContainer.appendChild(newsSite)
    singleArticleContainer.appendChild(addToLibraryButton)
    addToLibraryButton.addEventListener("click", addToLibary)
}


