class Cryptocurrency{
  constructor(name){
    this.name = name;
    this.data;
  }

  getData(){
    fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.data = data;
      });
  }

}