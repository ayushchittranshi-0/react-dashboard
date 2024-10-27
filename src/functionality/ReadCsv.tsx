import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CsvReader = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    // Load the CSV file
    Papa.parse('/data.csv', {
      download: true, // Set to true for downloading the file
      header: true,   // Set to true to use the first row as headers
      complete: (results) => {
        console.log(results.data); // Logs the array of objects
        setData(results.data); // Set the parsed data to state
      },
      error: (error) => {
        console.error('Error reading CSV:', error);
      }
    });
  }, []);

    console.log(data && data.length ? data[100] : "no data")
    // Get the last 10 rows of the data
    const lastTenRows = data.slice(-10);

    return (
        <div>
            <h2 className='text-gray-800'>Last 10 Lines of CSV Data</h2>
            {lastTenRows.length > 0 ? (
                lastTenRows.map((row, index) => (
                    <div key={index}>{JSON.stringify(row)}</div>
                ))
            ) : (
                <p>No data found.</p>
            )}
        </div>
    );
};

export default CsvReader;
