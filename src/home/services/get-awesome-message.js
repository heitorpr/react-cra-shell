import wretch from 'wretch';

function getAwesomeMessage() {
  return wretch('https://api.github.com/zen').get();
}

export default getAwesomeMessage;
