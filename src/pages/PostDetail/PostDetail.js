import React from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/Layout/Layout";
import "./PostDetail.css";

const PostDetail = ({onGoToPostDetail}) => {
    const { goBack } = useHistory();
    
    return (
        <div onClick={onGoToPostDetail}>
            <Layout>
                <div className="post-detail">
                    <div className="post-detail__header">
                        <img
                            src="https://randomuser.me/api/portraits/women/8.jpg"
                            alt="Random user"
                        />
                        <div className="post-detail__header-name">
                            <strong>Bobal</strong>
                            <span>@Marek</span>
                        </div>
                    </div>
                    <div className="post-detail__content">
                        <div className="post__message">
                            <div className="post-detail__action-buttons">
                                <FontAwesomeIcon icon={faComment} />
                                <FontAwesomeIcon icon={faHeart} />                                
                                <faRetweet icon={faRetweet} />
                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            {/* <NavLink to = '/'>Back again...</NavLink>
            <button onClick={()=>goBack()}> Go back </button> Post deatil... */}
        </div>
    );
};


export default PostDetail;