import { fetchingDataSortedByDate } from "../API/fetchingDataSortedByDate.js";
import { modifyIsSortedByTitle,modifySorted} from "../main-page.js";
const sortingInfoParapgraph = document.querySelector(".info-about-sorting");
const xArticlesToFetchInput = document.querySelector(".fetched-x-articles-input")
const container = document.querySelector(".container-for-all-article");

let pageNumber
export const sortByDate = () => {
    modifySorted(1)
    modifyIsSortedByTitle(0)
    sortingInfoParapgraph.innerHTML="Sorted by published date"
    if (xArticlesToFetchInput.value === "") {
      let number = 15
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
      pageNumber = number
      fetchingDataSortedByDate(pageNumber)
    }
    if (xArticlesToFetchInput.value !== "") {
      let number = parseFloat(xArticlesToFetchInput.value)
      while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
      pageNumber = number
      fetchingDataSortedByDate(pageNumber)
      xArticlesToFetchInput.value = ""
    }
  }

 