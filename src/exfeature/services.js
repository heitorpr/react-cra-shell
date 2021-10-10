function later(delay) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}

async function submitMessageService(message) {
  await later(500);
  return true;
}

export { submitMessageService };
