import React from "react";
import Layout from "../../components/Layout/Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faRetweet,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

import tweets from "../../mocks/tweets.json";

import "./PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();

  const tweet = tweets.find(tweet => tweet.id === parseInt(id));
  const { user, body } = tweet;

  return (
    <Layout>
      <div className="post-detail">
        <div className="post-detail__header">
          <img
            src="https://randomuser.me/api/portraits/women/11.jpg"
            alt="Random user"
          />
          <div className="post-detail__header-name">
            <strong>{user}</strong>
            <span>@{user}</span>
          </div>
        </div>
        <div className="post-detail__content">
          <div className="post__message">{body}</div>
          <div className="post-detail__action-buttons">
            <FontAwesomeIcon icon={faComment} />
            <FontAwesomeIcon icon={faRetweet} />
            <FontAwesomeIcon icon={faHeart} />
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
