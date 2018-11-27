const InstrumentFamilies = require('./models/instrument_families.js');
const InstrumentSelectView = require('./views/instrument_select_view');
const InstrumentInfoView = require('./views/instrument_info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new InstrumentSelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentInfoDiv = document.querySelector('div.instrument-info');
  const instrumentInfoDisplay = new InstrumentInfoView(instrumentInfoDiv);
  instrumentInfoDisplay.bindEvents();

  const instrumentDataSource = new InstrumentFamilies();
  instrumentDataSource.bindEvents();
});
