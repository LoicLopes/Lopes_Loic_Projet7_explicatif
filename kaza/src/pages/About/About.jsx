import Banner from '../../components/Banner/Banner'
import lac from '../../assets/images/lac.png'
import Collapse from '../../components/Collapse/Collapse'
function About() {
  return (
    <main>
      <Banner
        class="banner_about"
        image={lac}
        alt="Panoramic Mountain and Forest"
      />
      <section className="about">
        <Collapse title="Fiabilité ">
          <span>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </span>
        </Collapse>
        <Collapse title="Respect ">
          <span>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </span>
        </Collapse>
        <Collapse title="Service ">
          <span>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </span>
        </Collapse>
        <Collapse title="Sécurité ">
          <span>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            les voyageurs, chaque logement correspond aux critères sécurité
            établis par nos services. En laissant une notre aussi bien l'hôte
            qu'au locataire, cela permet à nos équipes de vérifier que les
            standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nous.
          </span>
        </Collapse>
      </section>
    </main>
  )
}
export default About
