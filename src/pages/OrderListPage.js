/* Importe certaines actions liées au state global de l'application. */
import { getOrders, setOrders } from '../store/actions/ordersActions.js'

/* Importe certains composants dits stateless, ne comportant pas ou peu d'intelligence logicielle. */
import OrderItemComponent from '../components/OrderItemComponent.js'

const OrderListPage = () => {

  setOrders(()=> {
    /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
    document.querySelector('#router').innerHTML = `
      <h1>Liste des commandes</h1>
      <hr>
    `
    getOrders().map(order => {
      OrderItemComponent(order)
    })
  })
}

export default OrderListPage
