// Global Variables
const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

// List in order and correct on 11 August 2022
const richestPeople = [
    "Elon Musk",
    "Bernard Arnault & Family",
    "Jeff Bezos",
    "Gautam Adani & Family",
    "Bill Gates",
    "Larry Ellison",
    "Warren Buffett",
    "Larry Page",
    "Sergey Brin",
    "Mukesh Ambani"
];

// Store the list items
const listItems = [];
// Initialize the sortable list
let dragStartIndex;
// Call function to sort the list
createList();

/**
Insert list items into the DOM
 */
function createList() {
    [...richestPeople]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
            const listItem = document.createElement("li");

            listItem.setAttribute("data-index", index);

            listItem.innerHTML = `
                <span class="number">${index + 1}</span>
                <div class="draggable" draggable="true">
                    <p class="person-name">
                        ${person}
                    </p>
                    <i class="fas fa-grip-lines"></i>
                </div>
            `;

            listItems.push(listItem);

            draggable_list.appendChild(listItem);
        });

        // call event listener function
        addEventListeners();
};

// Functions
function dragStart() {
    // console.log("Event: ", "dragstart");
    dragStartIndex = +this.closest("li").getAttribute("data-index");
};

function dragEnter() {
    // console.log("Event: ", "dragenter");
    this.classList.add("over");
};

function dragDrop() {
    // console.log("Event: ", "drop");
    const dragEndIndex = +this.getAttribute("data-index");
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove("over");
};

function swapItems(fromIndex, toIndex) {
    console.log(123)
}

function dragLeave() {
    // console.log("Event: ", "dragleave");
    this.classList.remove("over");
};

function dragOver(e) {
    // console.log("Event: ", "dragover");
    e.preventDefault();
};

function addEventListeners() {
    // query selector because there is more than one class element of draggables
    const draggables = document.querySelectorAll(".draggable");
    const dragListItems = document.querySelectorAll(".draggable-list li");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart)
    });

    dragListItems.forEach(item => {
        item.addEventListener("dragover", dragStart)
        item.addEventListener("drop", dragDrop)
        item.addEventListener("dragenter", dragEnter)
        item.addEventListener("dragleave", dragLeave) 
    });

};