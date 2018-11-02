import Cryptocurrency from "../Cryptocurrency/Cryptocurrency";

class Select {
  constructor() {
    this.currentCurrency = document.querySelector("#currentCurrency").innerText;
    this.isOpened = false;
    this.ethereum = new Cryptocurrency("ETH");
    this.litecoin = new Cryptocurrency("LTC");
    this.bitcoin = new Cryptocurrency("BTC");
  }

  init() {
    this.render();

    document.querySelector(".list").addEventListener("click", () => {
      document.querySelector(".list__items").style.display = this.isOpened
        ? "none"
        : "block";
      this.isOpened = !this.isOpened;
    });

    document.querySelector(".list__items").addEventListener("click", e => {
      const selectedCurrency = e.target.innerText;
      e.target.innerText = this.currentCurrency;
      this.currentCurrency = selectedCurrency;
      document.querySelector(
        "#currentCurrency"
      ).innerText = this.currentCurrency;
      this.render();
    });

    document.querySelector("#toggle").addEventListener("click", () => {
      document
        .querySelector(".toggle-switcher_back-layer")
        .classList.toggle("toggle-switcher_back-layer_off");
      document
        .querySelector(".toggle-switcher_front-layer")
        .classList.toggle("toggle-switcher_front-layer_off");
      this.ethereum.switchToggle();
    });
  }

  render() {
    this.ethereum.setData(this.currentCurrency);
    //this.litecoin.render();
    //this.bitcoin.render();
  }
}

export default Select;
