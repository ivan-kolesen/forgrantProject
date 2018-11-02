import scss from '../style.scss';
import Select from './Select/Select';

const getData = () => {
  fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
    .then(results => {
      return results.json();
    })
    .then(data => showData(data));
};

const showData = (data) => {
  //console.log(data);
};

getData();


let s = new Select();
s.init();











