import './Services.css'
import Cards from '../../UI/Cards'
import HeadingText from '../HeadingText/HeadingText'
import { services } from '../../data/Data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = () => {
  return (
    <section className='services'>
        <HeadingText title={'What I'} titlePrimary={'Offer'} />
        
        <div className='container services-container'>
            {
                services.map(({id, icon, name, des})=>{
                    return(
                        <Cards key={id} classname={'services-card'}>
                            <span><FontAwesomeIcon icon={icon}/></span>
                            <h3>{name}</h3>
                            <p>{des}</p>
                        </Cards>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Services
