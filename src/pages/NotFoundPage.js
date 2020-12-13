/* Importe certaines actions liées au state global de l'application. */
import { setCurrentRoute } from '../store/actions/routesActions.js'

/* Contrairement aux composants fonction de type page, celui-ci ne se déclenche que lorsque l'attribut currentRoute du
state global de l'application ne correspond à aucune route prévue par le composant de fonction RouterComponent. */
const NotFoundPage = () => {

  /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
  document.querySelector('#router').innerHTML = `
    <h1>Oups... cette page n'existe pas !</h1>
    <hr>
    <button class='btn btn-dark m-1' id='homePageButton'>Retour à l'accueil</button>
  `

  /* Cette fonction permet d'assigner la fonction setCurrentRoute interagissant avec le state global de
  l'application avec le paramètre souhaité au bouton du composant de fonction NotFoundPage. Ces fonctions sont répétées
  dans différents composants. L'intérêt est de scoper ces fonctions à ce composant de fonction et de ne pas propager ces
  fonctions aux autres composants de fonction. */
  document.querySelector('#homePageButton').addEventListener('click', () => {
    setCurrentRoute('home')
  })
}

export default NotFoundPage
