export async function getCurrencies() {
  const response = await fetch("https://economia.awesomeapi.com.br/json/all");
  const data = await response.json();

  return Object.keys(data);
}

export async function getExchange(currency) {
  if (currency !== 'BRL') {
    const reponse = await fetch(`https://economia.awesomeapi.com.br/json/${currency}-BRL`);
    const exchange = await reponse.json();

    return exchange[0];
  }
  return ({
    name: 'Real Brasileiro/Real Brasileiro',
    ask: '1',
    code: 'BRL',
    codein: 'BRL',
  })
}