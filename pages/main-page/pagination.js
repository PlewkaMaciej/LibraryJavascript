import { fetchingSingleData } from "./API/fetchingData.js"
import { fetchingSingleDataSortedByDate } from "./API/fetchingDataSortedByDate.js";
import { fetchingSingleDataSortedByTitle } from "./API/fetchingDataSortedByTitle.js";
import { isSorted,isSortedByTitle,pageNumber,modifyPageNumber} from "./main-page.js";

export function pagination() {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    if (isSorted === 0) {
        modifyPageNumber(pageNumber+1)
      fetchingSingleData(pageNumber)
    }
    if (isSorted === 1) {
      if (isSortedByTitle === 1) {
        modifyPageNumber(pageNumber+1)
        fetchingSingleDataSortedByTitle(pageNumber)
      }
      if (isSortedByTitle === 0) {
        modifyPageNumber(pageNumber+1)
        fetchingSingleDataSortedByDate(pageNumber)
       
      }
    }
  }
};
