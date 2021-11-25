// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector(`h1`)
// Check the typeof heading and log it.
console.log(typeof heading)
// Change the color of heading to black.
heading.style.color=`black`
// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let allHrs = document.querySelectorAll(`hr`)
/* 
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray

Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = [...allHrs]
// Set the border of the all the hr elements to "1px solid tomato"
allHrs.forEach((per)=>per.style.border="1px solid tomato")
// Change the background of all the hr to "antiquewhite" using for of loop.
for(let color of allHrs){
  color.style.backgroundColor="antiquewhite"
}
// Change the 'border-radius' of all the hr to "5px" using array.
for(let color of allHrs){
  color.style.borderRadius="5px"
}
// Change the alignment of the heading(h1) to center.
document.querySelector(`h1`).style.textAlign=`center`
// Change the font size of the heading to 3rem.
document.querySelector(`h1`).style.fontSize=`3rem`
// Change the border of hr with class 'image' to `2px solid purple`.
document.querySelectorAll(`.image`).forEach((per)=>per.style.border=`2px solid purple`)
// Hide the box number 17 (last box).
document.querySelector(`.seventeen`).style.display = `none`
// Change the border of all the hr element from solid to dashed type
allHrs.forEach((per)=>per.style.borderStyle="dashed")
// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement(`p`)
// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText="querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
// Remove all the elements from box 1
let remove1 =document.querySelector(`.one`).children
Array.from(remove1).forEach(list=>list.remove())

// Replace all the elements inside box 1 with the para (you created above)
document.querySelector(`.one`).append(para)
/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode
  - Access the childNodes
  - Access previousSibling
  - Access nextSibling
  - Access firstChild
  - Access lastChild

  - Access previousElementSibling
  - Access nextElementSibling
  - Access firstElementChild
  - Access lastElementChild

  - Focus on the difference between element and node
*/
let box16 = document.querySelector(`.sixteen`)
box16.parentNode
box16.childNodes

box16.previousSibling

box16.nextSibling

box16.firstChild

box16.lastChild

box16.previousElementSibling

box16.nextElementSibling

box16.firstElementChild

// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.
let para2 = document.createElement(`p`)
para2.innerText="Append inserts as last child" 
document.querySelector(`.two`).append(para2)
// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.
let para3 = document.createElement(`p`)
para3.innerText="Prepend inserts as first child"
document.querySelector(`.three`).append(para3)
// Change the border of box 4 to '1px solid black'
document.querySelector(`.four`).style.border='1px solid black'
// Change the border radius of box 5 to 10px.
document.querySelector(`.five`).style.borderRadius='10px'
// Change the text color of box 6 to black.
document.querySelector(`.six`).style.borderRadius='10px'
// Change the font size of the para inside box 1 to 0.8rem.
document.querySelector(`.one`).style.fontSize=`0.8rem`
// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue
  let oddcolor=[...document.querySelector(`.archive`).children]
   for(let i=0; i<18;i++){
     if(i%2==0){
        
         oddcolor[i].style.backgroundColor=`pink`
     }
     
   }

// add a class named "awesome-box" to the box 6 using classList property of DOM element.
document.querySelector(`.six`).classList.add("awesome-box")
// Using the toggle classList property toggle the class `awesome-box` from box 2
document.querySelector(`.two`).classList.toggle(`awesome-box`)
// Using the remove classList proeprty remove the class `awesome-box` from box 4
document.querySelector(`.four`).classList.remove(`awesome-box`)
// Change the background of the body to bisque
document.body.style.backgroundColor = `bisque`
// Create a button and store it in a variable named 'btn'
let btn = document.createElement(`button`)
// textContent of the button should be 'Click Me'
btn.textContent = 'Click Me'
// Change the background of the btn to 'oldlace'
btn.style.backgroundColor='oldlace'
// Change the font size of the btn to 1rem
btn.style.fontSize=`1rem`
// Change the border of the btn to '1px solid black'
btn.style.border='1px solid black'
// Add the padding of '0.5rem 1rem' to btn
btn.style.padding='0.5rem 1rem'
// Append the btn in box number 9
document.querySelector(`.nine`).append(btn)
// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let imgElm = document.createElement(`img`)
imgElm.setAttribute(`src`,"data:image/jpeg;base64,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")
// Select the box 7 using class seven
document.querySelector(`.seven`)
// Remove all the elements form box seven
let remove2=document.querySelector(`.seven`).children
Array.from(remove2).forEach(list=>list.remove())
// Append the imgElm to the box no 7
document.querySelector(`.seven`).append(imgElm)
// Change the width and height of the image to `100%`
imgElm.style.width=`100%`

// Select the box 5 using class five
document.querySelector(`.five`)
// Create an input element
document.createElement(`input`)
// Change the placeholder property of the input element to "Enter you email!"
let email=document.createElement(`input`)
email.setAttribute(`placeholder`,"Enter you email!")
// Append the input element to the box 5 you selected above
document.querySelector(`.five`).append(email)
// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a1 = document.createElement(`a`)
a1.innerText=`AltCampus`
let a2 = document.createElement(`a`)
a2.innerText=`Google`
// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
a1.setAttribute(`href`,`https://altcampus.school`)
a2.setAttribute(`href`,`https://google.com`)
// Append both the elements to box 5 you selected above.
document.querySelector(`.five`).append(a1,a2)