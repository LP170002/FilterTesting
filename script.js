const main = document.querySelectorAll(`.mainclassname`);
const filterButtons = document.querySelectorAll(`.filter`);
let list, arr, currentFilter, hideElement;

//! Loop through filter buttons that are at the top of page
for (let i = 0; i < filterButtons.length; i++) {
  //! Check to see if clicked
  filterButtons[i].addEventListener(`click`, function () {
    //!Getting the text from the filter buttons(dev, front, select)
    currentFilter = filterButtons[i].textContent;
    //! Loop through the filtered content
    for (let i = 0; i < main.length; i++) {
      //! Set list to the class list of all the filtered content
      list = main[i].className;

      //! Splitting the class list of the filtered content into and array
      arr = list.split(" ");

      //! Setup Global var for looped through filterd content
      hideElement = main[i];
      //! Loop through each item in array
      for (let i = 0; i < arr.length; i++) {
        // ! If arr at index i does not = the text content of the filter buttons
        if (arr[i] != currentFilter) {
          //! If text content of filtered content is not equal to text of filter button that is clicked
          if (!hideElement.textContent.includes(currentFilter)) {
            //! Add hidden class to elements that do not contain the same text as the filter button that was clicked
            hideElement.classList.add(`hidden`);
          }

          //! If the class at current index is equal to filter button text
        } else if (arr[i] === currentFilter) {
          hideElement.classList.remove(`hidden`);
        }
      }
    }
  });
}
