import Cryptocurrency from "./Cryptocurrency";

class App {
  constructor() {
    this.currentCurrency = document.querySelector("#currentCurrency").innerText;
    this.selectIsOpened = false;
    this.ethereum = new Cryptocurrency("ETH");
    this.litecoin = new Cryptocurrency("LTC");
    this.bitcoin = new Cryptocurrency("BTC");
    this.handleSelect = this.handleSelect.bind(this);
    this.handleOptions = this.handleOptions.bind(this);
  }

  handleSelect() {
    const listStyle = this.selectIsOpened ? "none" : "block";
    document.querySelector(".list__items").style.display = listStyle;
    this.selectIsOpened = !this.selectIsOpened;
  }

  handleOptions(e) {
    const selectedCurrency = e.target.innerText;
    e.target.innerText = this.currentCurrency;
    this.currentCurrency = selectedCurrency;
    document.querySelector("#currentCurrency").innerText = this.currentCurrency;
    this.render();
  }

  init() {
    document
      .querySelector(".list")
      .addEventListener("click", this.handleSelect);
    document
      .querySelector(".list__items")
      .addEventListener("click", this.handleOptions);
    this.ethereum.init();
    this.litecoin.init();
    this.bitcoin.init();
    this.render();
  }

  render() {
    this.ethereum.update(this.currentCurrency);
    this.litecoin.update(this.currentCurrency);
    this.bitcoin.update(this.currentCurrency);
  }
}

export default App;
