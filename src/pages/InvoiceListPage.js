/* Importe certaines actions liées au state global de l'application. */
import { getInvoices, setInvoices } from '../store/actions/invoicesActions.js'

/* Importe certains composants dits stateless, ne comportant pas ou peu d'intelligence logicielle. */
import InvoiceItemComponent from '../components/InvoiceItemComponent.js'

const InvoiceListPage = () => {

  setInvoices(()=> {
    /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
    document.querySelector('#router').innerHTML = `
      <h1>Liste des factures</h1>
      <hr>
    `
    getInvoices().map(invoice => {
      InvoiceItemComponent(invoice)
    })
  })
}

export default InvoiceListPage
