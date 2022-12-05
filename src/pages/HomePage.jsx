import Slider from '../Components/Slider/Slider'

// redux
import { useSelector } from 'react-redux';

//nueva library
import 'react-alice-carousel/lib/alice-carousel.css';



const HomePage = () => {

  return (
    <div className='mx-2'>
      <div className='mt-5 ohiden'>
        <Slider />
        
      </div>
    </div>
  )
}

export default HomePage;