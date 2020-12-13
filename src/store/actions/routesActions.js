import state from '../index.js'
import RouterComponent from '../../RouterComponent.js'

/* Retourne le contenu de l'attribut currentRoute du state global de l'application. */
export const getCurrentRoute = () => {
  return state.currentRoute
}

/* Modifie l'attribut currentRoute du state global de l'application en fonction du paramètre passé, puis execute le
composant de fonction RouterComponent afin de modifier dynamiquement la page à afficher. */
export const setCurrentRoute = (routeName) => {
  state.currentRoute = routeName
  RouterComponent()
}
