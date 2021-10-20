import styled from 'styled-components';
import {useState, useEffect, useRef} from 'react';

import {
  ButtonContainer,
  Button,
  Container,
} from './styles';


const Index = () => {

  const $allButton = useRef(null);
  const $sellingButton = useRef(null);
  const $soldoutButton = useRef(null);

  //활성화된 sortingButton의 상태를 관리한다.
  const [activatedSortingButton, setActivatedSortingButton] = useState('all')


  //sortingButton을 클릭하면 -> 클릭한 버튼을 확인하고 -> activatedSortingButton 상태를 변경해준다.
  const _onClickSortingButton = (e) => {
    if (e.target === $allButton.current) setActivatedSortingButton('all');
    if (e.target === $sellingButton.current) setActivatedSortingButton('selling');
    if (e.target === $soldoutButton.current) setActivatedSortingButton('soldout');
  };

  //모든 버튼에서 acitve 클래스를 제거해준다. -> 엑티브 시키기 전에 실행
  const turnOffActivatedButton = () => {
    $allButton.current.classList.remove('active');
    $sellingButton.current.classList.remove('active');
    $soldoutButton.current.classList.remove('active');
  };

  //버튼이 바뀔 때 마다 상태 값을 바꿔준다.
  useEffect(() => {
    turnOffActivatedButton();
    if (activatedSortingButton === 'all') $allButton.current.classList.add('active');
    if (activatedSortingButton === 'selling') $sellingButton.current.classList.add('active');
    if (activatedSortingButton === 'soldout') $soldoutButton.current.classList.add('active');
  }, [activatedSortingButton]);

  return (
    <Container>
      <ButtonContainer onClick={_onClickSortingButton}>
        <Button ref={$allButton}>전체</Button>
        <Button ref={$sellingButton}>판매중</Button>
        <Button className={'last'} ref={$soldoutButton}>판매완료</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Index;