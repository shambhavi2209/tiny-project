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
# Histogram
![histogram](https://github.com/shambhavi2209/tiny-project/assets/72241708/87a34779-2b1c-463c-bda9-14fbfdbecd18)
To create this histogram I have used chartjs-2. It contains word 20 most occuring word frequency from the text file that we fetched from by rendering the submit button. On the X-axis = top 20 words with the highest occurence and Y-axis = how many times they have occured. Further we added some datasets such as label "word-frequency", data, background color.
# fetchData() function
This function is called when the user clicks the submit button. It uses fetch function to fetch data from the URL entered by the user. When the data is received, 'fetchData' converts it to text format using the 'text' method. It then calculates the frequency of each word in the text by splitting the text by non-word characters and count the occurrences of each word. Finally, it sets the 'wordFrequency' state variable to the calculated frequency object and sets'showHistogram' to true to display the histogram.
# getTopWords() function
This function is a utility function that is used to calculate the data for the histogram. It takes the 'wordFrequency' object and returns an array of the top 20 most frequent words. 'getWordFrequencyCount' takes an array of words and the 'wordFrequency' object and returns an array of the frequency counts for each word in the input array.
# downloadCSV() function
This function is defined to export the top 20 words and their frequencies to a CSV file when the export button is clicked

[word_frequency.csv](https://github.com/shambhavi2209/tiny-project/files/11475186/word_frequency.csv)

![csv](https://github.com/shambhavi2209/tiny-project/assets/72241708/506a5379-305e-432c-b2ef-985a05ed17f5)

# Netlify link

