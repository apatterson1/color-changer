# Color Changer Project
Today you will be creating a simple program to allow the user to change the color of a webpage.

## Set-Up Your Project
First, we need to check out the project.

* On this page, click **Fork** in the top right to get your own copy
* Then open up Cloud9. Go to Respositories, find **color-changer** and click **Clone to edit**.
* Name the Workspace as **color-changer**, leave all other settings as default and click **Create workspace**.

## Create the HTML
Open `index.html` in your project workspace, and add the JQUERY library to the head of your html: 
```<script src="https://code.jquery.com/jquery-2.1.4.js"></script>```
Also in the head, create a second script tag that links to the solution.js file

Now in the body of your HTML:
* Add a button with the id "change" and the text "Change Color".
* Add a text input field with the id "newColor".
* Add a second button with the id "add" and the text "Add Color".

## Javascript Part One - Change Colors
Open `solution.js` in your project workspace

Set up your array of colors: 
* At the top of your file, define a new array called `colors`. 
* `colors` must have at least 4 elements. 
* Each element should be a string that contains a css color (example: "red")

Create the `changeColor` function: 
* Underneath your array, create a new function called `changeColor`
* Inside the `changeColor` function, generate a random number between 0 and largest index of the `colors` array (HINT: you should use `.length` in your solution). Store this number in a variable called `randomIndex`.
* Use jquery to change the color of the html body tag to the color at position `randomIndex` in the `colors` array.

Make the `change` button call the `changeColor` function:
* Under your `changeColor` function, add an anonymous document ready handler with an anonymous function
* Inside your anonymous function, add a handler that calls `changeColor` function when the `change` button is clicked.  

## Javascript Part Two - Add A Color

Create the `addColor` function: 
* Underneath the `changeColor` function, create a new function called `addColor`
* Inside the `addColor` function, use Jquery to get the value of the `newColor` text field. Store this value in a variable called `newColor`. 
* Add the new color to the end of the `colors` array (HINT: you should use `.length` in your solution). 
* Use jquery to change the color of the html body tag to the color at the end of the `colors` array. (HINT: you should use `.length` in your solution). 

Make the `add` button call the `addColor` function:
* Inside document ready function, add a handler that calls `addColor` function when the `add` button is clicked. 

## Check your work

When you think you have completed the project correctly, open `check-my-work.html` and preview the file in Cloud9.
`check-my-work.html` validates your code and will point out errors if it finds them.
If the tests are all green then your project is correct!

## Submission
You are expected to complete and submit these exercises by the end of this week. Don't waste time!
```bash
git add .
git commit -m "color-changer"
git push origin master
git push origin master:gh-pages
```
