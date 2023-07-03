import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <article
      className="card"
      style={{ backgroundImage: `url(${props.data.cover})` }}
    >
      <Link to={`/Apartment/${props.data.id}`}>
        <h3>{props.data.title}</h3>
      </Link>
    </article>
  )
}
export default Card

// Création de Card

/******* 

1 - Importation de link pour crée des liens sur les Cards
2 - Création de la fonction Card 
3 - Function card qui vas utiliser une props pour être modifiable
4 - La fonction sera modifiable en fonction de son utilisation
5 - Article  qui prendra la className pour le scss et un style (attention dans le style utilisé des backtick)  pour pouvoir
    lui attribuer une props qui vas lui attribuer la data cover de l'api quand on utilisera Card dans notre page Home  
6 - Link Pour définir le lien de la card en lui attribuant   
    /Apartement le chemin de la page Apartment.jsx et une propos pour définir l'id de la card 
    (Ne pas oublier de finir /Apartment/:id dans le fichier routes  pour bien définir la routes de la card en fonction de son iD)
7 - h3 prendra une props data.title pour lui attribuer le titre de la card de l'api 


*********/
