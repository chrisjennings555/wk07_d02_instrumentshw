const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function (container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:instrument', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  const headerFamily = document.createElement('h2');
  headerFamily.textContent = `${instrument.name}`;

  const familyInfoParagraph = document.createElement('h3');
  familyInfoParagraph.textContent = `${instrument.description}`;

  this.container.innerHTML = '';
  this.container.appendChild(headerFamily);
  this.container.appendChild(familyInfoParagraph);
};

module.exports = InstrumentInfoView;
