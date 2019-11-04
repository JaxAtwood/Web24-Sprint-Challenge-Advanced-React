import styled from "styled-components";

const Box = styled.div `
    border: magenta 4px solid;
    width: 60%;
    border-radius: 20px;
    margin: 0 auto;
    background: #ffe6ff;
`

const Player = styled.div `
    border: 4px solid teal;
    border-radius: 20px;
    background: white;
    width: 20%;
    height: 200px;
    padding: 6%;
    // margin: 50px 250px;
    // top: 50px;
    // left: -200px;
    margin: 8% 35%;
`

const Candy = styled.p `
    border: solid 1px magenta;
    width: 50px;
`

export { Box, Player, Candy };