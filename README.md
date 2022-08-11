# Sortable List, Drag and Drop using JavaScript

This application serves as a demonstartion to JavaScript verification methods and DOM manipulation. This application is a drop and drag top 10 list of the worlds richest people as of the date 11 August 2022, and is subject to change. The current top 10 richest people are:

1. Elon Musk (Net Worth: $263.0 Billion)
2. Bernard Arnault & Family (Net Worth: $170.7 Billion)
3. Jeff Bezos (Net Worth: $167.2 Billion)
4. Gautam Adani & Family (Net Worth: $129.8 Billion)
5. Bill Gates (Net Worth: $113.0 Billion)
6. Larry Ellison (Net Worth: $107.2 Billion)
7. Warren Buffett (Net Worth: $102.4 Billion)
8. Larry Page (Net Worth: $102.0 Billion)
9. Sergey Brin (Net Worth: $98.9 Billion)
10. Mukesh Ambani (Net Worth: $94.2 Billion)

## Technologies Used

-   VS Code IDE
-   Github for Version Control
-   Font Awesome for Icons
-   HTML, CSS and JavaScript

## How this application was created

This application was created using these steps:

-   Create THE HTML Boilerplate
-   Link Stylesheet, Script file and Font Awesome kit link
-   Created global variables in js
-   Iterate through the list and inserted into the DOM using the `[...spread operator]` and `.forEach()` method
-   Using high order array methods to scramble the list so when the application loads the list is in an incorrect order
-   Chain `.map()` method to sort the list and declare a object and declare the variable as `a`, this represents the `person` value in this method and then declare `.sort()` method to generate a value that we will use to scramble our list on load, this value changes on every page reload so the list will never scramble in the same order
-   Chain an additional `.map()` method to iterate and insert the name of the `person` into our DOM

### Resources

-   Forbes Top 10 Richest People (https://www.forbes.com/real-time-billionaires/#512bc6853d78)
-   20 Vanilla JS Projects with Brad Traversy on Udemy(https://www.udemy.com/course/web-projects-with-vanilla-javascript/learn/lecture/17842994#overview)
