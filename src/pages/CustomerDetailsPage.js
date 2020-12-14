/* Importe certaines actions liées au state global de l'application. */
import { getCustomer } from '../store/actions/customersActions.js'
import { setCurrentRoute } from '../store/actions/routesActions.js'
import { getOrdersByCustomer, setOrders, setOrder } from '../store/actions/ordersActions.js'

/* Importe certains composants de fonction dits stateless, ne comportant pas ou peu d'intelligence logicielle. */
import OrderItemComponent from '../components/OrderItemComponent.js'

/* Ce composant de fonction recevra en paramètre l'objet client assigné à l'attribut customer du state global de
l'application. */
const CustomerDetailsPage = () => {

  /* Modifie le contenu de l'attribut orders du state global de l'application. Cela permet d'avoir directement accès
  aux nouvelles données ajoutées en base de données au chargement de ce composant de fonction. */
  setOrders(() => {

      /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
      document.querySelector('#router').innerHTML = `
        <h1>Détail client</h1>
        <hr>
        <h2>${ getCustomer().firstName } <span class='text-uppercase'>${ getCustomer().lastName }</span></h2>
        <p>Total de commandes effectuées : ${ getCustomer().orders.length }</p>    
      `
      getOrdersByCustomer(getCustomer()).map(order => {
        OrderItemComponent(order)
      })
      document.querySelector('#router').innerHTML += `  
        <hr>
        <button class='btn btn-dark m-1' id='customerListPageButton'>Retour à la liste des clients</button>
      `

      /* Cette fonction permet d'assigner les fonctions setCurrentRoute et setOrder à chaque bouton du composant de
      fonction CustomerDetailsPage. Il est nécessaire de faire une seconde boucle pour éviter que la fonction d'ajout
      d'évènement au clic soit écrasée à chaque nouvelle itération. */
      getOrdersByCustomer(getCustomer()).map(order => {
        document.querySelector(`#orderDetailsNavLink_${ order.id }`)
          .addEventListener('click', () => {
            setOrder(order.id, () => { setCurrentRoute('order-details') })
          })
      })

      /* Cette fonction permet d'assigner la fonction setCurrentRoute interagissant avec le state global de
      l'application avec le paramètre souhaité au bouton du composant de fonction CustomerListDetails. Ces fonctions sont
      répétées dans différents composants. L'intérêt est de scoper ces fonctions à ce composant de fonction et de ne pas
      propager ces fonctions aux autres composants de fonction. */
      document.querySelector('#customerListPageButton').addEventListener('click', () => {
        setCurrentRoute('customer-list')
      })
    }
  )
}

export default CustomerDetailsPage
