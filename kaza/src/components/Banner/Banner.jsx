function Banner(props) {
  return (
    <div className={props.class}>
      <img src={props.image} alt={props.alt} />
      {props.children}
    </div>
  )
}

export default Banner

// Function Banner qui vas utiliser une props pour être modifiable
// La fonction sera modifiable en fonction de son utilisation
// Div qui prendra la class en fonction de la class que on lui attribut grace a props
// img  utilisera aussi une props.image et props.alt que on reglera en fonction de son utilisation
// props.children est utilisé si l'on veut ajouter des enfant dans la bannier comme un titre ou paragraphe
