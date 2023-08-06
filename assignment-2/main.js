function fetchData() {
    // Replace the API URL with the correct one
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Print or console.log all data
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Call the function to fetch and print the data
  fetchData();
  