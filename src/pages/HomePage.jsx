import Slider from '../Components/Slider/Slider'

// redux
import { useSelector } from 'react-redux';

//nueva library
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const HomePage = () => {
  const userData = useSelector(state => state.userSlice);
  const responsive = {
    0: { items: 1 },
    225: { items: 2 },
    450: { items: 3 },
  };
  let prueba = [];
  userData.list.map(cancion => {
    let newsong = <div className="item grid-center border border-primary" data-value="1">{cancion.username}</div>
    prueba.push(newsong)
  })
  return (
    <div className='mx-2'>
      <div className='mt-5 ohiden'>
        <Slider userData={userData}/>
        
      </div>
    </div>
  )
}

export default HomePage