import { fetchingSingleData } from "../API/fetchingData.js"
import { fetchingSingleDataSortedByDate } from "../API/fetchingDataSortedByDate.js";
import { fetchingSingleDataSortedByTitle } from "../API/fetchingDataSortedByTitle.js";
import { isSorted, isSortedByTitle, pageNumber, modifyPageNumber } from "../main-page.js";
import { fetchingCountData } from "../API/fetchingCountOfArticles.js";
import { countNumber, modifyCountNumber } from "../sort/sortByTitle.js";
import { countNumber2, modifyCountNumber2 } from "../sort/sortByDate.js";
export function pagination() {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    if (isSorted === 0) {
      modifyPageNumber(pageNumber + 1)
      fetchingSingleData(pageNumber)
      fetchingCountData(pageNumber + 1)
    }
    if (isSorted === 1) {
      if (isSortedByTitle === 1) {
        modifyCountNumber(countNumber + 1)
        modifyPageNumber(pageNumber + 1)
        fetchingSingleDataSortedByTitle(pageNumber)
        fetchingCountData(countNumber)
      }
      if (isSortedByTitle === 0) {
        modifyCountNumber2(countNumber2 + 1)
        modifyPageNumber(pageNumber + 1)
        fetchingSingleDataSortedByDate(pageNumber)
        fetchingCountData(countNumber2)
      }
    }
  }
};


