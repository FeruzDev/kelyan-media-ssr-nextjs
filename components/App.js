import Particles from "react-tsparticles";
import React from "react";
class App extends React.Component {
    render() {
        return (
            <div className="canvasBg">
                <Particles
                    id="nizom"
                    params={{
                        "particles": {
                            "number": {
                                "value": 150,
                                "density": {
                                    "enable": false
                                }
                            },
                            "size": {
                                "value": 1,
                                "random": true,
                                "opacity": 0.5,
                                "anim": {
                                    "speed": 1,
                                    "size_min": 0.5
                                }
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "enable": true,
                                "random": true,
                                "speed": 0.5,
                                "direction": "top",
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "bubble"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "repulse"
                                }
                            },
                            "modes": {
                                "bubble": {
                                    "distance": 250,
                                    "duration": 4,
                                    "size": 0,
                                    "opacity": 0
                                },
                                "repulse": {
                                    "distance": 100,
                                    "duration": 4
                                }
                            }
                        }
                    }} />




            </div>
        );
    }
}

export  default App;