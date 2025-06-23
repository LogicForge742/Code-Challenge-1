# Transaction Fee Estimator

## Description
A simple Node.js console application that estimates the transaction fee based on the amount to send. It calculates a fee at 1.5% of the amount with a minimum fee of KES 10 and a maximum fee of KES 70. The program prompts the user for the amount they want to send and outputs the calculated transaction fee along with the total amount to be debited.

## Features
- Prompts the user to input the amount to send.
- Validates user input to ensure it is a positive number.
- Calculates the transaction fee using a percentage rate with minimum and maximum limits.
- Displays the transaction fee and total amount to be debited.
- Outputs a clear and concise summary for the user.

## Future improvements
- Add support for different fee rates based on transaction type.
- Implement a graphical user interface for easier interaction.
- Allow users to input currency type and convert fees accordingly.

## Languages used
- JavaScript (Node.js)

## Installation
Clone this repository through:
 git clone :git@github.com:LogicForge742/Code-Challenge-1.git
 Then proceed to access a folder called MOBILEMONEYESTIMATOR where you would find a file named Mobile.js
 Navigate into the project directory and install dependencies:

cd transaction-fee-estimator
npm install prompt-sync
