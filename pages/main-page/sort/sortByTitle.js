import { fetchingDataSortedByTitle } from "../API/fetchingDataSortedByTitle.js";
import { modifyIsSortedByTitle,modifySorted} from "../main-page.js";


const container = document.querySelector(".container-for-all-article");
const sortingInfoParapgraph = document.querySelector(".info-about-sorting");
const xArticlesToFetchInput = document.querySelector(".fetched-x-articles-input")
let pageNumber

export const sortByTitle = () => {
    modifySorted(1)
    modifyIsSortedByTitle(1)
    sortingInfoParapgraph.innerHTML = "Sorted by title"
  
    if (xArticlesToFetchInput.value === "") {
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
      pageNumber = number
      fetchingDataSortedByTitle(pageNumber)
    }
    if (xArticlesToFetchInput.value !== "") {
      let number = parseFloat(xArticlesToFetchInput.value)
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
      pageNumber = number
      fetchingDataSortedByTitle(pageNumber)
      xArticlesToFetchInput.value = ""
    }
  }