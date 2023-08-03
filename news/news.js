// Fetch news data from the API
const apiKey = '3a278a474e204bd696e5a38b28c26a67';
const endpoint = 'https://newsapi.org/v2/everything?q=tesla&from=2023-07-02&sortBy=publishedAt&apiKey=3a278a474e204bd696e5a38b28c26a67'; // Replace with the API endpoint

fetch(endpoint, {
  headers: {
    Authorization: `3a278a474e204bd696e5a38b28c26a67${apiKey}`
  }
})
  .then(response => response.json())
  .then(data => {
    const newsContainer = document.getElementById('news-container');

    // Loop through the articles and create HTML elements
    data.articles.forEach(article => {
      const articleElement = document.createElement('div');
      articleElement.classList.add('article');

      const titleElement = document.createElement('h2');
      titleElement.textContent = article.title;

      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = article.description;

      const linkElement = document.createElement('a');
      linkElement.textContent = 'Read more';
      linkElement.href = article.url;

      articleElement.appendChild(titleElement);
      articleElement.appendChild(descriptionElement);
      articleElement.appendChild(linkElement);

      newsContainer.appendChild(articleElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
