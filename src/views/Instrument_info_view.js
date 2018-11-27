const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function (){

};

InstrumentInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:instrument', (event) => {
    const instrument = event.detail;
    this.render(instrument);
  });
};
