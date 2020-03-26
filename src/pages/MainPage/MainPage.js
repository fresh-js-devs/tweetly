import React from 'react';

import MessageBox from '../../components/MessageBox/MessageBox';
import Layout from '../../components/Layout/Layout';
import Post from '../../components/Post/Post';

const MainPage = () => {
  return (
    <Layout>
      <MessageBox />
      <div className='content'>
        <Post />
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
