/* Ce composant de fonction recevra en paramètre l'un des objets client du tableau d'objets clients de l'attribut
customers du state global de l'application. */
const CustomerItemComponent = (customer) => {

  /* Ajoute au contenu HTML de la div portant l'ID router le contenu suivant : */
  document.querySelector('#router').innerHTML += `
    <button class='btn btn-dark m-1'>
      ${ customer.firstName }
      <span class='text-uppercase'>${ customer.lastName }</span>,
      ${ customer.orders.length } commande(s)
    </button>
  `
}

export default CustomerItemComponent
