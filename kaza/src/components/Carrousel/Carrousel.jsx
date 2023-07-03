import { useState } from 'react'
import arrow_left from '../../assets/icons/arrow_left.png'
import arrow_right from '../../assets/icons/arrow_right.png'

function Carrousel({ pictures }) {
  const [isActive, setActive] = useState(0)

  const buttonNext = () => {
    if (isActive === pictures.length - 1) {
      setActive(0)
    } else {
      setActive(isActive + 1)
    }
  }
  const buttonPrevious = () => {
    setActive(isActive === 0 ? pictures.length - 1 : isActive - 1)
  }
  return (
    <section className="carousel">
      {pictures.map((picture, index) => (
        <div
          className={isActive === index ? 'slide' : 'slide--hidden'}
          key={index}
        >
          {index === isActive && <img src={picture} alt="room" />}
        </div>
      ))}
      {pictures.length > 1 ? (
        <>
          <button className="button btn_next" onClick={buttonNext}>
            <img src={arrow_right} alt="button next" />
          </button>
          <button className="button btn_previous" onClick={buttonPrevious}>
            <img src={arrow_left} alt="button previous" />
          </button>
          <div className="counter">
            {isActive + 1}/{pictures.length}
          </div>
        </>
      ) : null}
    </section>
  )
}
export default Carrousel

//  import { useState } from 'react'                                        //Import useState Qui vas permettre de définir l'etat du composant de l'element au niveau du client
//  import icon_arrow from '../../assets/icons/arrow.png'                   // Import de l'icone fleche

//  function Carrousel({ pictures }) {                                      //Création de la fonction qui prend comme argument l'objet picture en tant que props

//  const [isActive, setActive] = useState(0)                               // Crée un variable [] avec des décrochet car useState nous renvoie une paire de valeurs
                                                                            //  dans un tableau de 2 éléments, (la décomposition)
                                                                            //  que nous récupérons dans les variables  isOpen   et  setIsOpen
                                                                            //  .Le premier élément est la valeur actuelle,
                                                                            //  et le deuxième est une fonction qui permet de la modifie
                                                                            //  isActive pour définir la valeur actuel si c'est ouvert ou pas
                                                                            //  setActive : qui vas contenir le State
                                                                            //  Puis on lui attribut sa valeur initial useState(0)

//  const buttonNext = () => {                                              //  Variable buttonNext vas utiliser une fonction flecher , Et cette fonction flecher vas utiliser
//      setActive(isActive === pictures.length - 1 ? 0 : isActive + 1)      //  setActive qui contient le state utilise un opérateur ternaire pour vérifier si isActive,
//  }                                                                       //  qui est supposé être un index d'une image active,est égal à la longueur du tableau picture moins 1.(isActive === 0 ?)
                                                                            //  Si c'est le cas, la valeur de l'index devient 0; sinon, elle est augmentée de 1, ce qui signifie
                                                                            //  que le prochain élément dans le tableau sera sélectionné.); : cette ligne termine l'appel
                                                                            //  de la fonction setActive

//  const buttonPrevious = () => {                                          //  Variable buttonPrevious vas utiliser un fonction flecher , Et ce fonction flecher vas utiliser
//      setActive(isActive === 0 ? pictures.length - 1 : isActive - 1)      //  setActive qui contient le state utilise un opérateur ternaire pour vérifier si isActive,
//      }                                                                   //  qui est supposé être un index d'une image active, est égal à 0.    (isActive === 0 ?)
                                                                            //  Si c'est le cas,la valeur de l'index devient le dernier élément du tableau; sinon, elle est décrémentée de 1,
                                                                            //  ce qui signifie que l'élément précédent dans le tableau sera sélectionné.); :
                                                                            //  cette ligne termine l'appel de la fonction setActive. */

//  return (
//      <section className="carousel">
//          {pictures.map((picture, index) => (

//            <div                                                          //      <div
//            className={isActive === index ? 'slide' : 'slide--hidden'}    //            className={
//            key={index}                                                   //              function() {
//            >                                                             //              if (isActive === index) {
//            {index === isActive && <img src={picture} alt="room" />}      //               return 'slide';
//            </div>                                                        //              } else {
//          return 'slide--hidden';
//              }
//              }()
//              }
//              key={index}
//                  >
//            ))}

//    {pictures.length > 1 ? (                                              // Opération ternaire qui vas regarder le nombre d'image si il y en plus que 1
//  on affiche les button pour faire défiller les images

//      <>                                                                  // Element Fragment

//         <button className="button btn_next" onClick={buttonNext}>
//           <img src={icon_arrow} alt="button next" />
//        </button>
//         <button className="button btn_previous" onClick={buttonPrevious}>
//          <img src={icon_arrow} alt="button previous" />
//        </button>
//        <div className="counter">
//         {isActive + 1}/{pictures.length}
//        </div>
//      </>
//     ) : null}
//   </section>
//  )
//}
