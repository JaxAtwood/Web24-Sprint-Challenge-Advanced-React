import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Box, Player } from "./Styles";

const Card = props => {

    return (
        <div>
            <div>
                <h1>Women's World Cup Players</h1>
            </div>
            <Box>
            <Slider>
                {props.things.map (item => {
                    return (
                        <Player>
                        Player: {item.name} 
                        <br></br>
                        Country: {item.country} 
                        <br></br>
                        # of searches: {item.searches}
                        </Player>
                    );
                })}
            </Slider>
            </Box>
        </div>
    );
};
export default Card;