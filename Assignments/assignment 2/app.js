// 1. Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.
// function addFuncFirst(fVal) {
//     return function (sVal) {
//         return fVal + sVal ;
//     }
// }
// let addFuncSecond = addFuncFirst(5);
// console.log("Result is : "+addFuncSecond(2));

// --------------------------------------------------------------------------------------------------------------------------------------------

// 2. Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
// arr = [2,4,8,10,12];
// let i = 0;
// let length = arr.length;
// function recurseSearch(arr,i,length,val){
//     if (i<length){
//         if (arr[i] === val) {
//             return true;
//         } else {
//             return recurseSearch(arr,i+1,length,val);
//         }
//     }else{
//         return false;
//     }
// }
// let result = recurseSearch(arr,i,length,12);
// console.log(result);

// --------------------------------------------------------------------------------------------------------------------------------------------

// 3. Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element 
// let container = document.querySelector('body');
// function insertParagraphToHTML(text) {
//     let pg = document.createElement('p');
//     let data = document.createTextNode(text);
//     pg.appendChild(data);
//     container.appendChild(pg);
// }
// insertParagraphToHTML("This is KAshif Shaikh1");
// insertParagraphToHTML("This is KAshif Shaikh2");
// insertParagraphToHTML("This is KAshif Shaikh3");

// --------------------------------------------------------------------------------------------------------------------------------------------

// 4. Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument that will be used as the text content of the new list item.
// let container = document.querySelector('body');
// let ul = document.createElement('ul');
// function addItemsInList(text) {
//     let li = document.createElement('li');
//     let data = document.createTextNode(text);
//     li.appendChild(data);
//     ul.appendChild(li);
//     container.appendChild(ul);
// }
// addItemsInList("This is KAshif Shaikh1");
// addItemsInList("This is KAshif Shaikh2");
// addItemsInList("This is KAshif Shaikh3");
// addItemsInList("This is KAshif Shaikh4");

// --------------------------------------------------------------------------------------------------------------------------------------------

// 5. Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument is a reference to the HTML element, and the second argument is a string representing the new background color.
// function chngBgColor(ref,clr) {
//     let elem = document.querySelector(ref);
//     elem.style.backgroundColor = clr;
// }
// chngBgColor("#head1","grey")
// chngBgColor("h2","red")

