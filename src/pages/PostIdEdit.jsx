import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DeleteRecipientButton from '../components/common/Buttons/DeleteRecipientButton';
import { getRecipientData } from '../api/GetApi';
import { PostIdWrapper, HeaderWrapper, ButtonSection } from './PostId';
import Header from '../components/common/Header';
import SubHeader from '../components/post/SubHeader';
import CardItems from '../components/post/card/CardItems';
// import { deleteMessages } from '../api/DeleteApi';
import BackToPostButton from '../components/common/Buttons/BackToPostButton';

function PostIdEdit() {
  const { id } = useParams();
  const [data, setData] = useState({});
  // const [messages, setMessages] = useState(null);

  const handleIdData = async () => {
    try {
      const result = await getRecipientData(id);
      setData(result);
    } catch (error) {
      throw new Error('데이터를 불러오지 못했습니다.', error);
    }
  };

  // const handleMessages = async () => {
  //   try {
  //     const result = await getAllMessages(id);
  //     setMessages(result.results);
  //   } catch (error) {
  //     throw new Error('데이터를 불러오지 못했습니다.', error);
  //   }
  // };

  // const handleDeleteMessage = async (messageId) => {
  //   try {
  //     await deleteMessages(messageId);
  //     // handleMessages(id);
  //   } catch (error) {
  //     throw new Error('메세지 삭제에 실패했습니다.', error);
  //   }
  // };

  useEffect(() => {
    handleIdData();
    // handleMessages(id);
  }, [id]);

  return (
    <PostIdWrapper color={data.backgroundColor} image={data.backgroundImageURL}>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SubHeader
        name={data ? data.name : ''}
        peopleNum={data ? data.messageCount : 0}
      />
      <ButtonSection>
        <BackToPostButton moveLink={`/post/${id}`} btnName="뒤로가기" />
        <DeleteRecipientButton />
      </ButtonSection>
      {/* <CardItems messages={data} onDelete={handleDeleteMessage} /> */}
      <CardItems messages={data} />
    </PostIdWrapper>
  );
}

export default PostIdEdit;
