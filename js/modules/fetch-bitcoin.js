export default function initBitcoinFetch() {
  async function fetchBitcoin(url) {
    try {
      const fetchResponse = await fetch(url);
      const fetchJSON = await fetchResponse.json();
      const btcPreco = document.querySelector(".btc-preco");

      btcPreco.innerText = (10000 / fetchJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
