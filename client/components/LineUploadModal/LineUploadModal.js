import {useCallback, useEffect, useRef} from 'react';
import useInput from "../../hooks/useInput";
import {
  Container,
  UploadForm,
  InnerFormContainer,
  FormHead,
  Label,
  RidingTypeInput,
  BoatTypeInput,
  ButtonContainer,
  CancelButton,
  SubmitButton,
} from './styles';
import fetcher from "../../utils/fetcher";

const LineUploadModal = ({isOpenUploadModal,
                           setIsOpenUploadModal,
                           setIsActiveBlackout,
                           spotId,
                           setAllLineData,
                           setOneSpotLineData,
}) => {
  const $uploadForm = useRef(null);

  const [ridingType, setRidingType, onChangeRidingType] = useInput(null);
  const [boatType, setBoatType, onChangeBoatType] = useInput(null);

  const resetInputs = useCallback(() => {
    setRidingType('');
    setBoatType('');
  }, [setRidingType, setBoatType])

  const closeModal = useCallback(() => {
    setIsOpenUploadModal(false);
    setIsActiveBlackout(false);
  }, [setIsOpenUploadModal]);

  const createNewLine = async () => {
    const userId = sessionStorage.getItem('userId');
    const newLine = {
      'userId': sessionStorage.getItem('userId'),
      'userName': 'username',
      'spotId': spotId,
      'boatType': boatType,
      'ridingType': ridingType,
    }
    // const newLine = await fetcher('post', '/data/lines.json', newLineInfo);
    // if (!newLine) return Error('줄을 등록하는데 에러가 발생했습니다.');
    setAllLineData(prev => [...prev, newLine]);
  }

  const onSubmitNewLine = useCallback((e) => {
    e.preventDefault();
    console.log(ridingType, boatType);
    resetInputs();
    closeModal();
    createNewLine();
    alert('줄서기 등록이 완료 되었습니다.');
  }, [ridingType, boatType]);

  return (
    <Container>
      <UploadForm ref={$uploadForm} isOpenModal={isOpenUploadModal} onSubmit={onSubmitNewLine}>
        <InnerFormContainer>
          <FormHead>줄서기 등록</FormHead>
          <hr/>
          <Label><b>Riding Type</b></Label>
          <RidingTypeInput placeholder='ex) one-ski, wake-board'
                           type='text'
                           value={ridingType}
                           onChange={onChangeRidingType}/>
          <Label><b>Boat Type</b></Label>
          <BoatTypeInput placeholder='ex) 2021-MasterCraft-440hp'
                         type='text'
                         value={boatType}
                         onChange={onChangeBoatType}
          />
          <ButtonContainer>
            <CancelButton><b>Cancel</b></CancelButton>
            <SubmitButton onClick={onSubmitNewLine}><b>Submit</b></SubmitButton>
          </ButtonContainer>
        </InnerFormContainer>
      </UploadForm>
    </Container>
  );
};

export default LineUploadModal;
