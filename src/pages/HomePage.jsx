import Slider from "../Components/Slider/Slider"
import SliderAlbums from "../Components/Slider/SliderAlbums/SliderAlbums"

const HomePage = () => {

  return (
    <>
      <div className="container">
        <h3>Tacks</h3>
        <Slider />
        <h3>Albums</h3>
        <SliderAlbums />
        <h3>Play List</h3>

      </div>
    </>
  )
}

export default HomePage