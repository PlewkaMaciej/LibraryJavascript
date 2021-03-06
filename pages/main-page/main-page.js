import { fetchingData } from "./API/fetchingData.js";
import { sortByDate } from "./sort/sortByDate.js";
import { sortByTitle } from "./sort/sortByTitle.js";
import { fetchingCountData } from "./API/fetchingCountOfArticles.js";
import { pagination } from "./components/pagination.js";
const sortByTitleButton = document.querySelector("#sort-by-title-button")
const sortByDateButton = document.querySelector("#sort-by-date-button")
export let pageNumber = 15;
export function modifyPageNumber(value) { pageNumber = value; }
export let isSorted = 0;
export function modifySorted(value) { isSorted = value; }
export let isSortedByTitle = 1;
export function modifyIsSortedByTitle(value) { isSortedByTitle = value; }
window.onload = function () {
  fetchingData()
  fetchingCountData(pageNumber)
}


sortByTitleButton.addEventListener("click", sortByTitle);
sortByDateButton.addEventListener("click", sortByDate);
window.addEventListener("scroll", pagination)

