import { useState , useRef , useEffect } from 'react';
import styled from "styled-components";
import CarouselItem from '../CarouselItem/CarouselItem';
import CarouselButton from '../CarouselButton/CarouselButton';

const CarouselStyle = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 70px;
  
  * {
    box-sizing: border-box;
  }

  .carousel {
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
`;


export default function Carousel(){

    const totalItems = 5;
    const [ current, setCurrent ] = useState(0);

    const isMoving = useRef(false);

    useEffect(() => {
        isMoving.current = true;
        setTimeout(() => {
            isMoving.current = false;
        }, 500);
    }, [current]);


    const moveNext = () => {

        if(!isMoving.current){
            if (current === (totalItems-1)) {
                setCurrent(0);
            } else {
                setCurrent(current+1);
            }
        }
    }

    const movePrev = () => {

        if(!isMoving.current){
            if (current === 0) {
                setCurrent(totalItems - 1);
            } else {
                setCurrent(current-1);
            }
        }
    }


    const ItemList = Array(totalItems).fill().map(( _ , index) => {

        const key = `item_${index}`;

        const prev = ((current) === 0 ? totalItems - 1 : current-1);
        const next = (current === (totalItems-1) ) ? 0 : current+1;


        return (
            <CarouselItem
                // src={`https://picsum.photos/id/${index}/1600/900`}
                src={`https://i.ibb.co/zPjbSzH/Screen-Shot-2021-09-09-at-9-12-25-PM.png`}
                key={key}
                active={index === current}
                prev={index === prev}
                next={index === next}
            />

        );
    })

    return (
        <CarouselStyle>
            <div className="carousel">
                {ItemList}
                <CarouselButton
                    prev
                    handleSlide={movePrev}
                />
                <CarouselButton
                    next
                    handleSlide={moveNext}
                />
            </div>
        </CarouselStyle>
    );


}