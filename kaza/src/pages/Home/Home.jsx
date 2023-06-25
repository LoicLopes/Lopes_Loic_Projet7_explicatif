import Banner from '../../components/Banner/Banner'
import banner from '../../assets/images/banner.png'
import Card from '../../components/Card/Card'

function Home(props) {
  return (
    <main>
      <Banner class="banner_home" image={banner} alt="dream destination">
        <h2>Chez vous, partout et ailleurs</h2>
      </Banner>
      <section className="gallery">
        {props.datas.map((data) => (
          <Card key={data.id} data={data} />
        ))}
      </section>
    </main>
  )
}
export default Home

// On importe le composant Banner et l'image du dossiet asset
// Import le composant Card
// Création de la fonction Home sera notre page d'accueil
// Retourne
/* Banner : 
 Utilisation du composant ou l'on configure les props que on lui a attribuer (class / image / alt)
 Ajout du Titre h2 (enfant)
 */
/*
Section avec une classname gallery pour le scss
Utilisation de props.datas.map qui vas parcourir les donnée de l'API 
            props = propriété
            datas = déclarer dans dossier routes qui est le chemin de l'API
            map = parcours les données de datas 
            Et a cette fonction on lui attriut les données avec (data) utilise un fonction fléchée 
      OU on utilise la composant Card 
      Ce composant card utilise 
        une key = pour reconnaitre les elements de data avec data.id Un objet Map contient des paires de clé-valeur 
                  et mémorise l'ordre dans lequel les clés ont été insérées.
        data = les données de l'api
*/
