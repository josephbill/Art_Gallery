// DOM methods to aid with element selection. 
// selection via ID of elements 
// a variable for reference 
let heading = document.getElementById('main-heading')
let input_field = document.getElementById('user-input')
// selection via class name 
let highlightedParagraph = document.getElementsByClassName('highlight')
// selection via tag/element name 
let paragraphs = document.getElementsByTagName('p')

// special method : queryselector 
// document.querySelector , document.querySelectorAll
// if used on a tag name : it will pick the first element 
let firstParagraph = document.querySelector('p')
// for example if used to refrence a class simply indicate with .
let highlighted = document.querySelector('.highlight')
// for example if used to refrence an id simply indicate with #
let inputField = document.querySelector('#user-input')
// querySelectorAll is normally used to refrence tags 
let allparagraphs = document.querySelectorAll('p')


// Manipulating ELements using the DOM 
// 1. changing text content 
// 2. changing HTML content 
// 3. changing styling 
// 4. changing attributes (add , remove classes, ID's )
// 5. listen for events : click, submit, reload, copy : we use the method .addEventListener 

// 1 
heading.textContent = "Welcome to JAVASCRIPT DOM"
// 2
// let contentDiv = document.getElementById('content')
// contentDiv.innerHTML = '<p>Changed div into paragraph element</p>'

// 3
highlighted.style.color = 'blue'
highlighted.style.fontSize = '24px'

//4
//5 
let buttonChange = document.getElementById('change-heading')
buttonChange.addEventListener('click',function() {
    //  change color of the heading based of the class 
    heading.classList.add('styledcontent')
      let bodyTag = document.getElementsByTagName('body')[0]
    bodyTag.style.backgroundColor = 'red'
})


// to listen for a page load 
document.addEventListener('DOMContentLoaded', function(){
  
})
