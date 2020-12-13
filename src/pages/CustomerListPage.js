/* Importe certaines actions liées au state global de l'application. */
import { getCustomers, setCustomers } from '../store/actions/customersActions.js'

/* Importe certains composants dits stateless, ne comportant pas ou peu d'intelligence logicielle. */
import CustomerItemComponent from '../components/CustomerItemComponent.js'

const CustomerListPage = () => {

  setCustomers(()=> {
    /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
    document.querySelector('#router').innerHTML = `
      <h1>Liste des clients</h1>
      <hr>
    `
    getCustomers().map(customer => {
      CustomerItemComponent(customer)
    })
  })
}

export default CustomerListPage
