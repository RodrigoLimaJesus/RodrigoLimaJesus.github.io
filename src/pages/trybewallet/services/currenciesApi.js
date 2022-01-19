export async function getCurrencies() {
  const response = await fetch("https://economia.awesomeapi.com.br/json/all");
  if (response.status === 200) {
    const data = await response.json();
    return Object.keys(data);
  }

  return []
}