
import './Button.css';
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { saveAs } from 'file-saver';
import Chart from 'chart.js/auto';

function Button() {
  const [link, setLink] = useState("https://www.terriblytinytales.com/test.txt");
  const [data, setData] = useState("");
  const [wordFrequency, setWordFrequency] = useState({});
  const [showHistogram, setShowHistogram] = useState(false);

  const fetchData = () => {
    fetch(link)
      .then(response => response.text())
      .then(data => {
        setData(data);
        const frequency = {};
        const words = data.split(/\W+/); // split by non-word characters
        for (let i = 0; i < words.length; i++) {
          const word = words[i].toLowerCase();
          if (word in frequency) {
            frequency[word]++;
          } else {
            frequency[word] = 1;
          }
        }
        setWordFrequency(frequency);
        setShowHistogram(true);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  };

  const getTopWords = (wordFrequency) => {
    return Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([word, count]) => word);
  };

  const getWordFrequencyCount = (words, wordFrequency) => {
    return words.map(word => wordFrequency[word] || 0);
  };

  const downloadCSV = () => {
    const csv = getTopWords(wordFrequency)
      .map((word, index) => `"${index + 1}","${word}","${wordFrequency[word]}"`)
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "word_frequency.csv");
  };

  const chartData = {
    labels: getTopWords(wordFrequency),
    datasets: [
      {
        label: "Word Frequency",
        data: getWordFrequencyCount(
          getTopWords(wordFrequency),
          wordFrequency
        ),
        backgroundColor: "#e76f51",
      },
    ],
  };

  const chartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      {!showHistogram && (
        <div className='container'>
          <button className="submit-button" onClick={fetchData}>Submit</button>
        </div>
      )}
      {showHistogram && (
        <div>
          <button className="export-button" onClick={downloadCSV}>Export</button>
          <pre>{data}</pre>
          <div style={{ height: "500px" }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Button;
