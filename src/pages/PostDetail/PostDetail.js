import React from 'react';
import Layout from '../../components/Layout/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faRetweet,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

const PostDetail = () => {
  return (
    <Layout>
      <div className='post-detail'>
        <img
          src='https://randomuser.me/api/portraits/women/11.jpg'
          alt='Random user'
        />
        <div className='post-detail__header-name'>
          <strong>Some guy</strong>
          <span>@someGuy</span>
        </div>
      </div>

      <div className='post-detail__content'>
        <div className='post__message'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          adipisci pariatur cumque ipsum fugiat repellendus, odit ut cupiditate
          sunt sequi asperiores earum magni eligendi sapiente ullam illo
          reiciendis! Corrupti, ullam.
        </div>
        <div className='post-detail__action-buttons'>
          <FontAwesomeIcon icon={faComment} />
          <FontAwesomeIcon icon={faRetweet} />
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
