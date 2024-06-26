export function getImages(query) {
  const API_KEY = '43067029-c55b458b38852b6054b39e36e';
  const baseURL = 'https://pixabay.com/api/?';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const URL = baseURL + params;
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
