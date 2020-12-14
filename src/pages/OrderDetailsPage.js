/* Ce composant de fonction recevra en paramètre l'objet client assigné à l'attribut customer du state global de
l'application. */
import { getCustomerByOrder, setCustomers } from '../store/actions/customersActions.js'
import { getOrder } from '../store/actions/ordersActions.js'
import { getProductsByOrder, setProducts } from '../store/actions/productsActions.js'
import { setCurrentRoute } from '../store/actions/routesActions.js'

const OrderDetailsPage = () => {

  /* Modifie le contenu des attributs customers et orders du state global de l'application. Cela permet d'avoir
  directement accès aux nouvelles données ajoutées en base de données au chargement de ce composant de fonction. Ce
  procédé d'imbrication de callbacks est connu chez les développeurs React pour s'appeler nested contexts. */
  setCustomers(() => {
    setProducts(() => {
      /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
      document.querySelector('#router').innerHTML = `
        <h1>Détail commande</h1>
        <hr>
        <h2>Commandé le ${ getOrder().date }</h2>
        <p>
          Commandé par : ${ getCustomerByOrder(getOrder()).firstName } 
          <span class='text-uppercase'>${ getCustomerByOrder(getOrder()).lastName }</span>
        </p>
        <p>Total d'articles commandés : ${ getOrder().products.length }</p>
        <br>
      `
      getProductsByOrder(getOrder()).map(product => {
        document.querySelector('#router').innerHTML += `  
          <p>${ product.name }, ${ product.price }€</p>
        `
      })
      document.querySelector('#router').innerHTML += `  
        <hr>
        <button class='btn btn-dark m-1' id='orderListPageButton'>Retour à la liste des commandes</button>
      `

      /* Cette fonction permet d'assigner la fonction setCurrentRoute interagissant avec le state global de
      l'application avec le paramètre souhaité au bouton du composant de fonction OrderListDetails. Ces fonctions sont
      répétées dans différents composants. L'intérêt est de scoper ces fonctions à ce composant de fonction et de ne pas
      propager ces fonctions aux autres composants de fonction. */
      document.querySelector('#orderListPageButton').addEventListener('click', () => {
        setCurrentRoute('order-list')
      })
    })
  })
}

export default OrderDetailsPage
