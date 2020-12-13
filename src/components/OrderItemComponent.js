/* Ce composant de fonction recevra en paramètre l'un des objets commande du tableau d'objets commandes de l'attribut
orders du state global de l'application. */
const OrderItemComponent = (order) => {

  /* Ajoute au contenu HTML de la div portant l'ID router le contenu suivant : */
  document.querySelector('#router').innerHTML += `
    <button class='btn btn-dark m-1' id='orderDetailsNavLink_${ order.id }'>
      Le ${ order.date }, ${ order.products.length } article(s)
    </button>
   `
}

export default OrderItemComponent
