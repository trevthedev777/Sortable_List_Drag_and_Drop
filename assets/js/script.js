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
        })
};