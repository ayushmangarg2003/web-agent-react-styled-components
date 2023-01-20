import React from 'react'
import styled from 'styled-components'


const Square = styled.div`
    width : 60px;
    height : 60px;
    background-color : #87F717;
    opacity : 0.5;
    position : absolute;
    top : -60px;
    left : -60px;
    z-index :-101;
    animation : square 25s linear alternate infinite ;

    @keyframes square{
        to{
            transform : translate(calc(100vw - 10px) , 70vh)
        }
    }
`
const Circle = styled.div`
    width : 100px;
    height : 100px;
    border-radius : 50%;
    background-color : #FFF380;
    opacity : 0.8;
    position : absolute;
    top : 60vh;
    left : -100px;
    z-index :-101;
    animation : circle 20s linear alternate infinite ;
    overflow : hidden;

    @keyframes circle{
        to{
            transform : translate( calc(100vw - 10px) , -54vh)
        }
    }
`
const Rectangle = styled.div`
    width : 90px;
    height : 60px;
    background-color : #4e6bff;
    opacity : 0.6;
    position : absolute;
    top : 30vh;
    left : -60px;
    z-index :-101;
    animation : rectangle 10s linear alternate infinite ;

    @keyframes rectangle{
        to{
            transform : translate(55vw , calc( 70vh - 60px))
        }
    }
`

const Animation = (props) => {
    return (
        <div>
            <Square />
            <Circle />
            <Rectangle />
        </div>
    )
}

export default Animation