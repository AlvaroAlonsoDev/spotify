
import { useDispatch } from "react-redux"
import CardSmall from "../Components/Card/CardSmall/CardSmall"
import Player from "../Components/Player/Player"
import Slider from "../Components/Slider/Slider"

const HomePage = () => {

  return (
    <>
    <div className="container">
      <Slider />
      </div>
      <Player />
    </>
  )
}

export default HomePage