/* Importe certaines actions liées au state global de l'application. */
import { getCurrentRoute } from './store/actions/routesActions.js'

/* Importe tous les composants de fonction de type page. */
import HomePage from './pages/HomePage.js'
import CustomerListPage from './pages/CustomerListPage.js'
import CustomerDetailsPage from './pages/CustomerDetailsPage.js'
import OrderListPage from './pages/OrderListPage.js'
import OrderDetailsPage from './pages/OrderDetailsPage.js'
import ProductListPage from './pages/ProductListPage.js'
import ProductDetailsPage from './pages/ProductDetailsPage.js'
import NotFoundPage from './pages/NotFoundPage.js'

/* Retourne l'un des composants de fonction de l'application en fonction du contenu de l'attribut currentRoute du state
global de l'application. Certains de ces composants reçoivent comme paramètre un tableau d'objet ou un objet afin
d'acceder à certains attributs du state global de l'application. */
const RouterComponent = () => {

  switch (getCurrentRoute()) {
    case 'home':
      return HomePage()
    case 'customer-list':
      return CustomerListPage()
    case 'customer-details':
      return CustomerDetailsPage()
    case 'order-list':
      return OrderListPage()
    case 'order-details':
      return OrderDetailsPage()
    case 'product-list':
      return ProductListPage()
    case 'product-details':
      return ProductDetailsPage()
    default:
      return NotFoundPage()
  }

}

export default RouterComponent
