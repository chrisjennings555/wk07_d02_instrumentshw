const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('#instrument-families');
  const instrumentDropdown = new InstrumentInfoView(selectInstrument);
  instrumentDropdown.bindEvents();
});
