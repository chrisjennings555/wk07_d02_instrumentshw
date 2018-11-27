const PubSub = require('../helpers/pub_sub.js');

const InstrumentSelectView = function(element){
  this.element = element;
};

InstrumentSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments);
  });

  this.element.addEventListener('change', (event) => {
    const selectedInstrument = event.target.value;
    PubSub.publish('SelectedInstrument:change', selectedInstrument);
  });
};

InstrumentSelectView.prototype.populate = function(instrumentsData){
  instrumentsData.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamily.name;
    option.value = index;
    this.element.appendChild(option);

  })
}

module.exports = InstrumentSelectView;
