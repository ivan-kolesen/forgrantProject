class Cryptocurrency {
  constructor(name) {
    this.name = name;
    this.toggle = 'percent';
    this.measure = '%';
    this.data = {};
  }

  setData() {
    fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.data = data;
        this.render();
      });
  }

  renderPrice() {
    document.querySelector(`#price${this.name}`).innerText = this.data.last;
  }

  renderTimeIntervalChange(interval) {
    const id = `#${interval}Change${this.name}`;
    let timeIntervalChange = this.data.changes[this.toggle][interval];

    if (timeIntervalChange >= 0) {
      timeIntervalChange = `+${timeIntervalChange} ${this.measure}`;
      document.querySelector(id).classList.add('changes-value_positive');
    } else {
      timeIntervalChange = `${timeIntervalChange} ${this.measure}`;
      document.querySelector(id).classList.add('changes-value_negative');
    }

    document.querySelector(`#${interval}Change${this.name}`).innerText = timeIntervalChange;
  }

  render() {
    this.renderPrice();
    this.renderTimeIntervalChange('hour');
    this.renderTimeIntervalChange('day');
    this.renderTimeIntervalChange('week');
    this.renderTimeIntervalChange('month');
  }

}

export default Cryptocurrency;