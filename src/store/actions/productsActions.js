/* Ces fonctions pourraient être rassemblées et ne passer en paramètres que les attributs souhaités. Cependant, cette
application a été conçue dans dans le but d'être ce que pourrait être les prémices d'un éventuel CRM. Il est ainsi très
probable que ces fonctions auraient évolué et auraient nécessité d'avoir leur propre logique, de ce fait, j'ai préféré
isoler ces fonctions, quitte à répéter leur logique. */
import state from '../index.js'

/* Retourne le contenu de l'attribut products du state global de l'application. */
export const getProducts = () => {
  return [...state.products]
}

/* Retourne le contenu de l'attribut product du state global de l'application. */
export const getProduct = () => {
  return { ...state.product }
}

/* Vérifie le contenu de la base de données au format json contenu à la racine du projet, et assigne le tableau d'objets
articles à l'attribut products du state global de l'application. Le paramètre que j'ai ici nommé callback permet de
lancer une fonction après que le tableau d'objets articles ait été réassigné. */
export const setProducts = (callback) => {
  fetch('./database.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      state.products = data.products
    })
    .then(() => {
      callback()
    })
    .catch(err =>{
      console.error(err)
    })
}

/* Vérifie le contenu de la base de données au format json contenu à la racine du projet, et parcourt le tableau
d'objets articles et assigne en fonction de l'id passé en paramètre de cette fonction l'objet article correspondant à
l'attribut products du state global de l'application. Le paramètre que j'ai ici nommé callback permet de lancer une
fonction après que le tableau d'objets articles ait été réassigné. */
export const setProduct = (id, callback) => {
  fetch('./database.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      state.product = data.products.find(c => c.id === id)
    })
    .then(() => {
      callback()
    })
    .catch(err =>{
      console.error(err)
    })
}

