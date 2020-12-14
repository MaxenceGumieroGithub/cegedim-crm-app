/* Importe certaines actions liées au state global de l'application. */
import { setCurrentRoute } from '../store/actions/routesActions.js'

const HeaderComponent = () => {

  /* Réécrit le contenu HTML de la div portant l'ID header en lui assignant le contenu suivant : */
  document.querySelector('#header').innerHTML = `
    <nav class='navbar navbar-expand-lg navbar-light bg-secondary shadow mb-3'>
      <div class='container'>
        <a class='navbar-brand' id='homePageNavbarBrandLink'>Cegedim CRM</a>
        <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav'>
            <a class='nav-link' id='homePageNavLink'>Accueil</a>
            <a class='nav-link' id='productListPageNavLink'>Articles</a>
            <a class='nav-link' id='customerListPageNavLink'>Clients</a>
            <a class='nav-link' id='orderListPageNavLink'>Commandes</a>
          </div>
        </div>
      </div>
  `

  /* Cette série de fonctions permet d'assigner la fonction setCurrentRoute interagissant avec le state global de
  l'application avec le paramètre souhaité à chaque bouton du composant de fonction HeaderComponent. Ces fonctions sont
  répétées dans différents composants. L'intérêt est de scoper ces fonctions à ce composant de fonction et de ne pas
  propager ces fonctions aux autres composants de fonction. */
  document.querySelector('#homePageNavbarBrandLink').addEventListener('click', () => {
    setCurrentRoute('home')
  })

  document.querySelector('#homePageNavLink').addEventListener('click', () => {
    setCurrentRoute('home')
  })

  document.querySelector('#productListPageNavLink').addEventListener('click', () => {
    setCurrentRoute('product-list')
  })

  document.querySelector('#customerListPageNavLink').addEventListener('click', () => {
    setCurrentRoute('customer-list')
  })

  document.querySelector('#orderListPageNavLink').addEventListener('click', () => {
    setCurrentRoute('order-list')
  })
}

export default HeaderComponent
