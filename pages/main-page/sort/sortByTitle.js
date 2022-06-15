import { fetchingDataSortedByTitle } from "../API/fetchingDataSortedByTitle.js";
import { modifyIsSortedByTitle,modifySorted} from "../main-page.js";
import { fetchingCountData } from "../API/fetchingCountOfArticles.js";

const container = document.querySelector(".container-for-all-article");
const sortingInfoParapgraph = document.querySelector(".info-about-sorting");
const xArticlesToFetchInput = document.querySelector(".fetched-x-articles-input")
let pageNumber=15
let number =15
export let countNumber
export function modifyCountNumber( value ) { countNumber = value; }
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
    fetchingCountData(pageNumber)
    countNumber=pageNumber
  }