import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel/Carrousel'
import Error from '../Error/Error'
import Collapse from '../../components/Collapse/Collapse'
import TagList from '../../components/Tags/Tags'
import Evaluation from '../../components/Evaluation/Evaluation'

function Apartment(props) {
  let { id } = useParams()
  let data = props.datas.find((data) => data.id === id)
  if (!data) {
    return <Error />
  }
  return (
   <main>
        <Carrousel pictures={data.pictures} />
        <section className="Apartment">
          <div className="Apartment__header">
                <div className='Apartment__header__title--wrap'>
                  <div>
                      <h2 className='Apartment__header__title'>{data.title}</h2>
                      <p className='Apartment__header__location'>{data.location}</p>
                  </div>
                      <TagList data={data.tags}/>
                </div>
                <div className='Apartment__header__host--wrap'>
                      <div className='Apartment__header__host'>
                          <p className='Apartment__header__host__name'>{data.host.name}</p>
                          <img 
                          className='Apartment__header__host__picture'
                          src = {data.host.picture} 
                          alt='Profile Pictures'></img>
                      </div>
                      <div className="Apartment__header__evaluation ">
                      <Evaluation value={data.rating}/>
                      </div>
                </div>      
          </div>
          <div className="Apartment__content">
                    <Collapse title="Description" content={data.description} />
                    <Collapse title="Equipements" content={data.equipments} />
          </div>
        </section>
   </main>
  )
}

export default Apartment
