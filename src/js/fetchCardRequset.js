import { renderRequestCard } from './markup';

export function fetchCardRequest() {
  const callBox = document.querySelector('.result--callBox');
  const url = `https://swapi.dev/api/people/1/?format=json`;

  fetch(url)
    .then(response => response.json())
      .then(
          response => {
      callBox.insertAdjacentHTML('afterend', renderRequestCard(response));
    }
    );
}
