// styles.js

// Importa los archivos CSS
import './Ui/nakamaUi.mian.css';
import './ui/styles/nakamaWin95Ui.css';
import './ui/styles/nakamaNeonUi.css';

// Si necesitas exportarlos para usarlos como módulos en otros archivos,
// puedes crear un objeto con los estilos y exportarlos
const templates = {
  nakamaOriginal: './Ui/nakamaUi.mian.css',
  nakamaWin95: './ui/styles/nakamaWin95Ui.css',
  nakamaNeon: './ui/styles/nakamaNeonUi.css'
};

export default templates;
