document.addEventListener('DOMContentLoaded', () => {
    fetch('https://cmsapi.groww.in/api/v1/dailydigests?_limit=1&_start=0')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const dataContainer = document.getElementById('dataContainer');
        
        // Assuming 'data' is an array
        data.forEach(item => {
          const itemElement = document.createElement('div');
          itemElement.className = 'item';
          
          // Customize the content based on the structure of your data
          itemElement.innerHTML = `
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          `;
          
          dataContainer.appendChild(itemElement);
        });
      })
      .catch(error => console.error('Error:', error));
  });
  