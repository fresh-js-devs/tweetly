import React from 'react';
import { useHistory } from 'react-router-dom';

const PostDetail = () => {
  const { goBack } = useHistory();

  return (
    <div>
      <button onClick={() => goBack()}>Go back</button> Post detail...
    </div>
  );
};

export default PostDetail;
