import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({track}) => {
    return (
        <div className='fixfooter'>
            <AudioPlayer
                autoPlay
                src={track}
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
    )
}

export default Player