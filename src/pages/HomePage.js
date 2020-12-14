/* Importe certaines actions liées au state global de l'application. */
import { setCurrentRoute } from '../store/actions/routesActions.js'

const HomePage = () => {

  /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
  document.querySelector('#router').innerHTML = `
    <h1>Bienvenue sur l'application CRM de Cegedim</h1>
    <hr>
    <button class='btn btn-dark m-1' id='productListPageButton'>Voir la liste des articles</button>
    <button class='btn btn-dark m-1' id='customerListPageButton'>Voir la liste des clients</button>
    <button class='btn btn-dark m-1' id='orderListPageButton'>Voir la liste des commandes</button>
  `

  /* Cette série de fonctions permet d'assigner la fonction setCurrentRoute interagissant avec le state global de
  l'application avec le paramètre souhaité à chaque bouton du composant de fonction HomePage. Ces fonctions sont
  répétées dans différents composants. L'intérêt est de scoper ces fonctions à ce composant de fonction et de ne pas
  propager ces fonctions aux autres composants de fonction.*/
  document.querySelector('#productListPageButton').addEventListener('click', () => {
    setCurrentRoute('product-list')
  })

  document.querySelector('#customerListPageButton').addEventListener('click', () => {
    setCurrentRoute('customer-list')
  })

  document.querySelector('#orderListPageButton').addEventListener('click', () => {
    setCurrentRoute('order-list')
  })
}

export default HomePage
