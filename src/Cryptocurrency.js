class Cryptocurrency {
  constructor(name) {
    this.currentCurrency = "USD";
    this.currencySign = "$";
    this.name = name;
    this.toggle = "percent";
    this.data = {};
    this.handleToggle = this.handleToggle.bind(this);
  }

  init() {
    document
      .querySelector(`#toggle${this.name}`)
      .addEventListener("click", this.handleToggle);
  }

  handleToggle() {
    document
      .querySelector(`#buttonBack${this.name}`)
      .classList.toggle("toggle-button__back-layer_off");
    document
      .querySelector(`#buttonFront${this.name}`)
      .classList.toggle("toggle-button__front-layer_off");
    this.toggle = this.toggle === "percent" ? "price" : "percent";
    this.render();
  }

  update(currentCurrency) {
    this.currentCurrency = currentCurrency;
    this.updateData();
  }

  updateData() {
    const endOfLink = this.name + this.currentCurrency;
    fetch(`https://apiv2.bitcoinaverage.com/indices/global/ticker/${endOfLink}`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.data = data;
        this.render();
      });
  }

  renderPrice() {
    switch (this.currentCurrency) {
      case "USD":
        this.currencySign = "$";
        break;
      case "EUR":
        this.currencySign = "€";
        break;
      case "RUB":
        this.currencySign = "₽";
        break;
      case "GBP":
        this.currencySign = "£";
        break;
    }
    document.querySelector(`#price${this.name}`).innerText = `${
      this.currencySign
    }${this.data.last.toFixed(2)}`;
  }

  renderTimeIntervalChange(interval) {
    const id = `#${interval}Change${this.name}`;
    const sign = this.toggle === "percent" ? "%" : this.currencySign;
    let timeIntervalChange = this.data.changes[this.toggle][interval];

    if (timeIntervalChange >= 0) {
      timeIntervalChange = `+${timeIntervalChange.toFixed(2)} ${sign}`;
      document.querySelector(id).classList.add("changes-row__value_positive");
    } else {
      timeIntervalChange = `${timeIntervalChange.toFixed(2)} ${sign}`;
      document.querySelector(id).classList.add("changes-row__value_negative");
    }

    document.querySelector(
      `#${interval}Change${this.name}`
    ).innerText = timeIntervalChange;
  }

  render() {
    this.renderPrice();
    this.renderTimeIntervalChange("hour");
    this.renderTimeIntervalChange("day");
    this.renderTimeIntervalChange("week");
    this.renderTimeIntervalChange("month");
  }
}

export default Cryptocurrency;
