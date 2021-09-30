import ImageItem from '../ImageItem/ImageItem';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  

`;
const Col = styled.div`
  float: left;
  width: 33.33%;
`;
const Images = ({_onClickImage}) => {

    const imagesInfo = [
        {
            url: 'https://i.ibb.co/fQ6rFtT/Screen-Shot-2021-09-10-at-3-26-49-PM.png',
            title: 'Image Title1',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem eius error eum excepturi expedita facere inventore ipsa, laboriosam laudantium magnam magni numquam, odio placeat quam rem vitae voluptate voluptates!\n'
        },
        {
            url: 'https://user-images.githubusercontent.com/44131043/132935964-ceb9b3ba-6540-41fd-8569-54d0bbeee6c2.jpeg',
            title: 'Image Title2',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem eius error eum excepturi expedita facere inventore ipsa, laboriosam laudantium magnam magni numquam, odio placeat quam rem vitae voluptate voluptates!\n'
        },
        {
            url: 'https://editorial01.shutterstock.com/wm-preview-1500/1482728a/2acc2243/barry-oconnell-president-of-the-sonning-water-ski-club-makes-a-pattern-through-the-air-in-an-exhibition-of-kite-water-skiing-at-the-international-waterski-tournament-at-bedfont-in-middlesex-shutterstock-editorial-1482728a.jpg',
            title: 'Image Title3',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem eius error eum excepturi expedita facere inventore ipsa, laboriosam laudantium magnam magni numquam, odio placeat quam rem vitae voluptate voluptates!\n'
        },
        {
            url: 'https://i.ibb.co/fQ6rFtT/Screen-Shot-2021-09-10-at-3-26-49-PM.png',
            title: 'Image Title4',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem eius error eum excepturi expedita facere inventore ipsa, laboriosam laudantium magnam magni numquam, odio placeat quam rem vitae voluptate voluptates!\n'
        },
        {
            url: 'https://editorial01.shutterstock.com/wm-preview-1500/1482728a/2acc2243/barry-oconnell-president-of-the-sonning-water-ski-club-makes-a-pattern-through-the-air-in-an-exhibition-of-kite-water-skiing-at-the-international-waterski-tournament-at-bedfont-in-middlesex-shutterstock-editorial-1482728a.jpg',
            title: 'Image Title5',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem eius error eum excepturi expedita facere inventore ipsa, laboriosam laudantium magnam magni numquam, odio placeat quam rem vitae voluptate voluptates!\n'
        },
        {
            url: 'https://user-images.githubusercontent.com/44131043/132935964-ceb9b3ba-6540-41fd-8569-54d0bbeee6c2.jpeg',
            title: 'Image Title6',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem eius error eum excepturi expedita facere inventore ipsa, laboriosam laudantium magnam magni numquam, odio placeat quam rem vitae voluptate voluptates!\n'
        },
        {
            url: 'https://i.ibb.co/fQ6rFtT/Screen-Shot-2021-09-10-at-3-26-49-PM.png',
            title: 'Image Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem eius error eum excepturi expedita facere inventore ipsa, laboriosam laudantium magnam magni numquam, odio placeat quam rem vitae voluptate voluptates!\n'
        },

    ];



    return (
        <Row>
            {imagesInfo.map(({url, title, text}) =>
                (
                <Col>
                <ImageItem url={url}
                           title={title}
                           text={text}
                           _onClickImage={_onClickImage}
                />
                </Col>
                )
            )}
        </Row>
    );
};

export default Images;



