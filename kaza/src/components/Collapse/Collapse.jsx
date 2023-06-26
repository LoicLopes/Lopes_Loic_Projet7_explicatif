// Import useState Qui vas permettre de définir l'etat du composant de l'element au niveau du client
import { useState } from 'react'
// Import de l'icone fleche
import icon_arrow from '../../assets/icons/arrow.png'

// Crée la fonction collapse qui vas utilisé des props vu que elle sera utiliser plusieur fois
function Collapse(props) {
  // Crée un variable [] avec des décrochet car useState nous renvoie une paire de valeurs dans un tableau de 2 éléments, (la décomposition)
  //                                            que nous récupérons dans les variables  isOpen   et  setIsOpen
  //                                            .Le premier élément est la valeur actuelle,
  //                                            et le deuxième est une fonction qui permet de la modifie
  // isOpen pour définir la valeur actuel si c'est ouvert ou pas
  // setIsOpen : qui vas contenir le State
  // Puis on lui attribut sa valeur initial useState(faux) car on veut juste savoir si c'est ouvert ou pas
  // dans d'autre cas on peut déclarer la valeur initial différement useState(0) en number si on veut utiliser le state pour un ajout au panier par exemple
  const [isOpen, setIsOpen] = useState(false)
  // Un fois que on a notre State pour savoir l'etat du collapse on peut return
  return (
    // Div qui regroupe une collapse
    <div className="Collapse">
      {/* div qui vas etre l'entete de la collapse et contenir 2 element titre et button */}
      <div className="Collapse__header">
        {/* Plusieur Collapse donc plusieur titre on utilise donc une props */}
        {props.title}
        {/* Button avec evement click qui vas utiliser une fonction flechée
            A Cette fonction flechée on lui attribut setIsOpen qui est un fonction qui vas permettre de modifier la valeur avec le click
            Parametre nommé previousState (comme c'est un booléen)
            retourn !previousState "différent de l'etat actuel"
            A chaque clique sa changera le state en false ou true
    */}
        <button onClick={() => setIsOpen((previousState) => !previousState)}>
          {/* Attribut un logo au boutton dans une balise img */}
          <img
            // configure ClassName
            /*1 - className={arrow'`: ici, nous définissons le nom de classe initial comme étant "arrow".
            2 -  ${isOpen ? 'arrow-up' : 'arrow-down'}: il s'agit d'un opérateur ternaire qui vérifie si la variable isOpen est vraie ou fausse.
            3 -  Si isOpen est vrai, cela renvoie 'arrow-up', sinon cela renvoie 'arrow-down'.
            4 -  Donc, lorsque isOpen est vrai, la chaîne entière assignée à className sera "arrow arrow--up", 
            5 -  et lorsque isOpen est faux, elle sera "arrow arrow--down".*/
            className={`arrow ${isOpen ? 'arrow--up' : 'arrow--down'}`}
            // L'icon arrow importer de assets
            src={icon_arrow}
            // L'opérateur ternaire dans ce cas vérifie la valeur de la variable isOpen, qui est supposée être une booléenne.
            // Si isOpen est vrai, la valeur de l'attribut alt sera 'close button'.
            // Sinon, la valeur sera 'open button'.
            alt={isOpen ? 'close button' : 'open button'}
          />
        </button>
      </div>
      {/*""""""""""""""""""""""""""""""""""""""""""""""""""Cette parti est crée pour la page Apartment """""""""""""""""""""""""""""""""""
Cette ligne vérifie si la propriété "content" passée en tant que prop est un tableau. 
Si c'est le cas, elle commence à créer une liste avec chaque élément du tableau.*/}
      {Array.isArray(props.content) ? (
        /*Si "content" est un tableau, cette ligne crée un élément de liste HTML <ul> et
ajoute une classe "content" si "isOpen" est vrai (true) ou une classe "content--hidden" 
si "isOpen" est faux (false). Cette classe de style détermine si la liste est affichée ou masquée*/
        <ul className={isOpen ? 'content' : 'content--hidden'}>
          {/*Si "content" est un tableau, cette ligne utilise la méthode map() pour parcourir chaque élément du tableau 
et créer un élément <li>sous-jacent pour chaque élément. Chaque élément est créé avec une clé unique basée sur son contenu et son index.
Le texte de chaque élément du tableau est affiché à l'intérieur de chaque élément <li>.
            */}
          {props.content.map((equipment, index) => (
            <li key={`${equipment}-${index}`}>{equipment}</li>
          ))}
        </ul>
      ) : (
        /*"""""""""""""""""""""""""""""""""""""""""""""""""Cette parti est crée pour la page Apartment """""""""""""""""""""""""""""""""""*/

        /*Cet accolade correspond à la première accolade après "Array.isArray(props.content)". 
Si "content" n'est pas un tableau, alors ce bloc de code sera exécuté. */
        /*Si "content" n'est pas un tableau, cette ligne crée simplement une div 
        avec une classe "content" si "isOpen" est vrai (true) ou une classe "content--hidden" si "isOpen" est faux (false). 
        Le texte de "content" sera affiché à l'intérieur de cette div, 
        ainsi que tout autre contenu transmis en utilisant la propriété "props.children" */
        <div className={isOpen ? 'content' : 'content--hidden'}>
          {/*Le texte de "content" sera affiché à l'intérieur de cette div, */}
          {props.content}
          {/*ainsi que tout autre contenu transmis en utilisant la propriété "props.children" */}
          {props.children}
        </div>
      )}
    </div>
  )
}
export default Collapse
