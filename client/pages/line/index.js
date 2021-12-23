import {useEffect, useState} from 'react';
import checkLogin from '../../utils/checkLogin';
import TopSpotsList from '../../components/TopSpotsList/TopSpotsList';
import fetcher from "../../utils/fetcher";
import SpotList from '../../components/SpotList/SpotList';
import Carousel from "../../components/carousel/Carousel";
import SearchBar from "../../components/SearchBar/SearchBar";
import {CarouselContainer} from "./styles";
import useSpots from "../../hooks/useSpots";

const Line = () => {
  const {getSpots, spotsLoading} = useSpots();

  useEffect(() => {
    getSpots();
  }, []);

  if (spotsLoading) return <div>로딩</div>;

  return (
    <>
      <SearchBar/>
      <TopSpotsList/>
      <CarouselContainer>
        <Carousel/>
      </CarouselContainer>
      <SpotList/>
    </>
  );
};

export default Line;