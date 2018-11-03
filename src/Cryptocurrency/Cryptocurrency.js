class Cryptocurrency {
  constructor(name) {
    this.currentCurrency;
    this.currencySign = "$";
    this.name = name;
    this.toggle = "percent";
    this.data = {};
  }

  setData(currentCurrency) {
    this.currentCurrency = currentCurrency;
    fetch(
      `https://apiv2.bitcoinaverage.com/indices/global/ticker/${this.name}${
        this.currentCurrency
      }`
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.data = data;
        this.render();
      });
  }

  switchToggle() {
    this.toggle = this.toggle === "percent" ? "price" : "percent";
    this.render();
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
    let timeIntervalChange = this.data.changes[this.toggle][interval].toFixed(
      2
    );

    if (timeIntervalChange >= 0) {
      timeIntervalChange = `+${timeIntervalChange} ${sign}`;
      document.querySelector(id).classList.add("changes-row__value_positive");
    } else {
      timeIntervalChange = `${timeIntervalChange} ${sign}`;
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
