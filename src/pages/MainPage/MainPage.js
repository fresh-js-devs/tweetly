import React from 'react';
import { useHistory } from 'react-router-dom';

import MessageBox from '../../components/MessageBox/MessageBox';
import Layout from '../../components/Layout/Layout';
import Post from '../../components/Post/Post';

import tweets from '../../mocks/tweets.json';

const MainPage = () => {
  const { push } = useHistory();

  const handleGoToPostDetail = () => push('/tweet');

  return (
    <Layout>
      <MessageBox />
      <div className='content'>
        {tweets.map(({ id, user, body }) => (
          <Post
            key={id}
            user={user}
            body={body}
            onGoToPostDetail={handleGoToPostDetail}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MainPage;
