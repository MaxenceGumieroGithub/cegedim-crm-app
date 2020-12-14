/* Importe certaines actions liées au state global de l'application. */
import { getCustomers, setCustomers, setCustomer } from '../store/actions/customersActions.js'
import { setCurrentRoute } from '../store/actions/routesActions.js'

/* Importe certains composants de fonction dits stateless, ne comportant pas ou peu d'intelligence logicielle. */
import CustomerItemComponent from '../components/CustomerItemComponent.js'

/* Ces fonctions pourraient être rassemblées et ne passer en paramètres que les attributs souhaités. Cependant, cette
application a été conçue dans dans le but d'être ce que pourrait être les prémices d'un éventuel CRM. Il est ainsi très
probable que ces fonctions auraient évolué et auraient nécessité d'avoir leur propre logique, de ce fait, j'ai préféré
isoler ces fonctions, quitte à répéter leur logique. */
const CustomerListPage = () => {

  /* Modifie le contenu de l'attribut customers du state global de l'application. Cela permet d'avoir directement accès
  aux nouvelles données ajoutées en base de données au chargement de ce composant de fonction. */
  setCustomers(()=> {

    /* Réécrit le contenu HTML de la div portant l'ID router en lui assignant le contenu suivant : */
    document.querySelector('#router').innerHTML = `
      <h1>Liste des clients</h1>    
      <hr>
    `
    getCustomers().map(customer => {
      CustomerItemComponent(customer)
    })
    document.querySelector('#router').innerHTML += `  
      <hr>
      <button class='btn btn-dark m-1' id='homePageButton'>Retour à l'accueil</button>
    `

    /* Cette fonction permet d'assigner les fonctions setCurrentRoute et setCustomer à chaque bouton du composant de
    fonction CustomerListPage. Il est nécessaire de faire une seconde boucle pour éviter que la fonction d'ajout
    d'évènement au clic soit écrasée à chaque nouvelle itération. */
    getCustomers().map(customer => {
      document.querySelector(`#customerDetailsNavLink_${ customer.id }`)
        .addEventListener('click', () => {
          setCustomer(customer.id, () => { setCurrentRoute('customer-details') })
        })
    })

    /* Cette fonction permet d'assigner la fonction setCurrentRoute interagissant avec le state global de
    l'application avec le paramètre souhaité au bouton du composant de fonction CustomerListPage. Ces fonctions sont
    répétées dans différents composants. L'intérêt est de scoper ces fonctions à ce composant de fonction et de ne pas
    propager ces fonctions aux autres composants de fonction. */
    document.querySelector('#homePageButton').addEventListener('click', () => {
      setCurrentRoute('home')
    })
  })
}

export default CustomerListPage
