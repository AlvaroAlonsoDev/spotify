
import { useSelector } from "react-redux";
import Slider from "../Components/Slider/Slider"

const HomePage = () => {
  const array = useSelector(state => state.trackSlice);
  
  return (
    <>
      <div className="container minh">
        <Slider 
        array={array} 
        title='No te lo puedes perder'
        />
      </div>
      <div className="container minh">
        <Slider 
        array={array} 
        title='No te lo puedes perder'
        />
      </div>
      <div className="container minh">
        <Slider 
        array={array} 
        title='No te lo puedes perder'
        />
      </div>
      <div className="container minh">
        <Slider 
        array={array} 
        title='No te lo puedes perder'
        />
      </div>
      
    </>
  )
}

export default HomePage