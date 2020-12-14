/* Ce composant de fonction recevra en paramètre l'objet client assigné à l'attribut customer du state global de
l'application. */
import { getProduct } from '../store/actions/productsActions.js'
import { setCurrentRoute } from '../store/actions/routesActions.js'

const ProductDetailsPage = () => {

  /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
  document.querySelector('#router').innerHTML = `
    <h1>Détail article</h1>
    <hr>
    <h2>${ getProduct().name }</h2>
    <p>Prix : ${ getProduct().price }€</p>
  `
  document.querySelector('#router').innerHTML += `  
    <hr>
    <button class='btn btn-dark m-1' id='productListPageButton'>Retour à la liste des clients</button>
  `

  /* Cette fonction permet d'assigner la fonction setCurrentRoute interagissant avec le state global de
  l'application avec le paramètre souhaité au bouton du composant de fonction ProductListDetails. Ces fonctions sont
  répétées dans différents composants. L'intérêt est de scoper ces fonctions à ce composant de fonction et de ne pas
  propager ces fonctions aux autres composants de fonction. */
  document.querySelector('#productListPageButton').addEventListener('click', () => {
    setCurrentRoute('product-list')
  })
}

export default ProductDetailsPage
