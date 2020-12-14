/* Ces fonctions pourraient être rassemblées et ne passer en paramètres que les attributs souhaités. Cependant, cette
application a été conçue dans dans le but d'être ce que pourrait être les prémices d'un éventuel CRM. Il est ainsi très
probable que ces fonctions auraient évolué et auraient nécessité d'avoir leur propre logique, de ce fait, j'ai préféré
isoler ces fonctions, quitte à répéter leur logique. */
import state from '../index.js'

/* Retourne le contenu de l'attribut orders du state global de l'application. */
export const getOrders = () => {
  return [...state.orders]
}

/* Retourne le contenu de l'attribut order du state global de l'application. */
export const getOrder = () => {
  return { ...state.order }
}

/* Filtre le contenu de l'attribut orders du state global de l'application et retourne uniquement un tableau d'objets
commandes d'un objet client passé en paramètre de la fonction. */
export const getOrdersByCustomer = (customer) => {
  return getOrders().filter(order => order.customer === customer.id)
}

/* Vérifie le contenu de la base de données au format json contenu à la racine du projet, et assigne le tableau d'objets
commandes à l'attribut orders du state global de l'application. Le paramètre que j'ai ici nommé callback permet de
lancer une fonction après que le tableau d'objets commandes ait été réassigné. */
export const setOrders = (callback) => {
  fetch('./database.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      state.orders = data.orders
    })
    .then(() => {
      callback()
    })
    .catch(err =>{
      console.error(err)
    })
}

/* Vérifie le contenu de la base de données au format json contenu à la racine du projet, et parcourt le tableau
d'objets commandes et assigne en fonction de l'id passé en paramètre de cette fonction l'objet commande correspondant à
l'attribut orders du state global de l'application. Le paramètre que j'ai ici nommé callback permet de lancer une
fonction après que le tableau d'objets commandes ait été réassigné. */
export const setOrder = (id, callback) => {
  fetch('./database.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      state.order = data.orders.find(c => c.id === id)
    })
    .then(() => {
      callback()
    })
    .catch(err =>{
      console.error(err)
    })
}
