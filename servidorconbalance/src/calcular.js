process.on("message", (msg) => {
  const { cant } = msg;
  const processNumbers = cant ? cant : 100000000;
  const randomNumbers = [];

  for (let i = 0; i < processNumbers; i++) {
    randomNumbers.push(Math.floor(Math.random() * 1000 + 1));
  }

  const result = {};

  for (const el of randomNumbers) {
    result[el] = result[el] + 1 || 1;
  }

  process.send(result);
});
