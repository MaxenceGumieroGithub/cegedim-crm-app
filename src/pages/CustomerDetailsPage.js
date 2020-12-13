/* Ce composant de fonction recevra en paramètre l'objet client assigné à l'attribut customer du state global de
l'application. */
import { getCustomer } from '../store/actions/customersActions.js'

const CustomerDetailsPage = () => {

  /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
  document.querySelector('#router').innerHTML = `
    <h1>Détail client</h1>
    <hr>
    <h2>${ getCustomer().firstName } <span class='text-uppercase'>${ getCustomer().lastName }</span></h2>
  `
}

export default CustomerDetailsPage
