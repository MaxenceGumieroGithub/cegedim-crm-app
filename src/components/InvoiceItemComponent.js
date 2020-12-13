/* Ce composant de fonction recevra en paramètre l'un des objets facture du tableau d'objets factures de l'attribut
invoices du state global de l'application. */
const InvoiceItemComponent = (invoice) => {

  /* Ajoute au contenu HTML de la div portant l'ID router le contenu suivant : */
  document.querySelector('#router').innerHTML += `
    <p>InvoiceItemComponent</p>
  `
}

export default InvoiceItemComponent
