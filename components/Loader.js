import React, {Component} from 'react';
import ReactPlayer from 'react-player'
class Loader extends Component {
    render() {
        return (
            <div className="Loader overflow-hidden">
                {/*<ReactPlayer muted={true} playing={true} url="/video/des.mp4 " className="videoLoaderDes" />*/}
                {/*<ReactPlayer muted={true} playing={true} url="/video/mob.mp4 " className="videoLoaderMob" />*/}


                <video src="/video/des.mp4 " className="videoLoaderDes" muted playsInline    loop autoPlay />
                <video src="/video/mob.mp4 " className="videoLoaderMob" muted playsInline   loop autoPlay />
            </div>
        );
    }
}

export default Loader;