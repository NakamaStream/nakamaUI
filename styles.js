// styles.js

// Requiere los archivos CSS
require('./Ui/nakamaUi.mian.css');
require('./ui/styles/nakamaWin95Ui.css');
require('./ui/styles/nakamaNeonUi.css');

// Si necesitas exportarlos para usarlos como módulos en otros archivos,
// puedes crear un objeto con los estilos y exportarlos
const templates = {
  nakamaOriginal: './Ui/nakamaUi.mian.css',
  nakamaWin95: './ui/styles/nakamaWin95Ui.css',
  nakamaNeon: './ui/styles/nakamaNeonUi.css'
};

module.exports = templates;
