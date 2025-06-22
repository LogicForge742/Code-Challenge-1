Chai Ingredients Calculator
A simple Node.js program that calculates the total amount of ingredients needed to make a specified number of cups of Chai Bora (Kenyan tea).

Features
Prompts the user to enter the number of cups of chai they want to make.

Validates the user input to ensure it is a positive number.

Calculates the total amount of water, milk, tea leaves, and sugar required.

Displays the ingredient quantities in a clear, formatted output.

Installation
Clone the repository or copy the code into a file named Chai.js.

Install the prompt-sync package if you don't have it already:

npm init 
npm install prompt-sync
Run the program using Node.js:

bash
node chai-calculator.js
Usage
When you run the program, you will be prompted:

text
Karibu! How many cups of Chai Bora would you like to make?
Enter a positive number (e.g., 3), and the program will output the total ingredients needed, for example:

text
To make 3 of Chai you need :
    water: 600ml
    milk :150 ml
    tea leaves :3 tablespoons
    sugar: 6 tablespoons

Enjoy your Chai bora !
If you enter an invalid input (e.g., a negative number or text), the program will prompt you to input a positive number.

How It Works
The program uses the prompt-sync package to get user input synchronously.

The calculateChaiIngredients function multiplies the per-cup ingredient amounts by the number of cups.

Input validation ensures the user enters a valid positive number.

Results are displayed using JavaScript template literals for clean formatting.

License
This project is open source and free to use.

Languages used 
 JavaScript 

Clone this repository through :
git clone :git@github.com:LogicForge742/Code-Challenge-1.git
Open Chai.js file 

