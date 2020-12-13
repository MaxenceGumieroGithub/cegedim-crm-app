/* Importe certaines actions liées au state global de l'application. */
import { getProducts, setProducts } from '../store/actions/productsActions.js'

/* Importe certains composants dits stateless, ne comportant pas ou peu d'intelligence logicielle. */
import ProductItemComponent from '../components/ProductItemComponent.js'

const ProductListPage = () => {

  setProducts(()=> {
    /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
    document.querySelector('#router').innerHTML = `
      <h1>Liste des articles</h1>
      <hr>
    `
    getProducts().map(product => {
      ProductItemComponent(product)
    })
  })
}

export default ProductListPage
