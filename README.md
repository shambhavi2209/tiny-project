# Word-Frequency
This is a React web app that fetches the text file from the URL,parses the contents and calculates the frequency of occurence of each word, and displays a histogram of the 20 most frequent words. Further it also has an export button which allows the user to export the histogram data to a CSV file.
# Installation
To install and run this application, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the project directory
3. Install the dependencies (npm install)
4. Start the server (npm start)
5. Open your browser and go to https://localhost:3000 
# libraries
1. install react npx create-react-app my-app
2. npm install --save chart.js react-chartjs-2
3. npm install file-saver --save
# Buttons
1. Submit Button: This button fetches the text of the URL on the screen by using various functions such as .fetch(), .text(). On the first load only this button is visible and all the other elements show up only after clicking the submit button present in the middle of the screen.
![submit](https://github.com/shambhavi2209/tiny-project/assets/72241708/155ede4c-81c1-4ea1-9ec4-4225d10b3017)
2. Export Button: This button shows up only after you click the submit button in green color on the top left corner it allows the user to save CSV file of the histogram data.
![export](https://github.com/shambhavi2209/tiny-project/assets/72241708/1f0fefbf-2f89-484b-8654-5a9ef1caaf9f)
