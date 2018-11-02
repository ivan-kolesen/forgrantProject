class Cryptocurrency {
  constructor(name) {
    this.currentCurrency;
    this.name = name;
    this.toggle = "percent";
    this.measure = "%";
    this.data = {};
  }

  setData(currentCurrency) {
    this.currentCurrency = currentCurrency;
    fetch(
      `https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC${
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

  setMeasure() {
    if (this.toggle === "percent") {
      this.measure = "%";
    } else {
      switch (this.currentCurrency) {
        case "USD":
          this.measure = "$";
          break;
        case "EUR":
          this.measure = "E";
          break;
        case "RUB":
          this.measure = "P";
          break;
        case "GBP":
          this.measure = "F";
          break;
      }
    }
  }

  switchToggle() {
    this.toggle = this.toggle === "percent" ? "price" : "percent";
    this.render();
  }

  renderPrice() {
    document.querySelector(`#price${this.name}`).innerText = this.data.last;
  }

  renderTimeIntervalChange(interval) {
    const id = `#${interval}Change${this.name}`;
    let timeIntervalChange = this.data.changes[this.toggle][interval];

    if (timeIntervalChange >= 0) {
      timeIntervalChange = `+${timeIntervalChange} ${this.measure}`;
      document.querySelector(id).classList.add("changes-value_positive");
    } else {
      timeIntervalChange = `${timeIntervalChange} ${this.measure}`;
      document.querySelector(id).classList.add("changes-value_negative");
    }

    document.querySelector(
      `#${interval}Change${this.name}`
    ).innerText = timeIntervalChange;
  }

  render() {
    this.setMeasure();
    this.renderPrice();
    this.renderTimeIntervalChange("hour");
    this.renderTimeIntervalChange("day");
    this.renderTimeIntervalChange("week");
    this.renderTimeIntervalChange("month");
  }
}

export default Cryptocurrency;
