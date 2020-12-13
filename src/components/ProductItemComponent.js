/* Ce composant de fonction recevra en paramètre l'un des objets article du tableau d'objets articles de l'attribut
products du state global de l'application. */
const ProductItemComponent = (product) => {

  /* Ajoute au contenu HTML de la div portant l'ID router le contenu suivant : */
  document.querySelector('#router').innerHTML += `
    <p>${ product.name }</p>
  `
}

export default ProductItemComponent
