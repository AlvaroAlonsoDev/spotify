
import { useSelector } from "react-redux";
import Slider from "../Components/Slider/Slider"

const HomePage = () => {
  const tracks = useSelector(state => state.trackSlice);
  const usersData = useSelector(state => state.userSlice);
  
  return (
    <>
      <div className="container minh">
        <Slider 
        slidesPerView={2}
        size='small'
        array={tracks} 
        title='No te lo puedes perder'
        />
      </div>
      <div className="container minh">
        <Slider 
        slidesPerView={1}
        size='medium'
        array={usersData} 
        title='Lista de usuarios'
        />
      </div>
      
      
    </>
  )
}

export default HomePage