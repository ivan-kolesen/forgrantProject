class Select{
  constructor(){
    this.currentCurrency = document.querySelector('#currentCurrency').innerText;
    this.isOpened = false;
  }

  init(){
    document.querySelector('.list').addEventListener('click', () => {
      document.querySelector('.list__items').style.display = (this.isOpened ? 'none' : 'block');
      this.isOpened = !this.isOpened;
    });

    document.querySelector('.list__items').addEventListener('click', (e) => {
      const selectedCurrency = e.target.innerText;
      e.target.innerText = this.currentCurrency;
      this.currentCurrency = selectedCurrency;
      document.querySelector('#currentCurrency').innerText = this.currentCurrency;
    });
  }

}

export default Select;