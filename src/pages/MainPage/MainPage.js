import React from 'react';
import { useHistory } from 'react-router-dom';

import MessageBox from '../../components/MessageBox/MessageBox';
import Layout from '../../components/Layout/Layout';
import Post from '../../components/Post/Post';

const MainPage = () => {
  const {push} = useHistory();

  const handleGoToPostDetail = () => {
    console.log("clicked handleGoToPostDetail ")
    push('/tweet');
  }
  
  return (
    <Layout>
      <MessageBox />
      <div className='content'>
        <Post onGoToPostDetail={handleGoToPostDetail}/>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </Layout>
  );
};

export default MainPage;
