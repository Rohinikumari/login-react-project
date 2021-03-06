import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';

const CommentDetail = props => {
    return (

        //react
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                   {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today at 6:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    );
};


export default CommentDetail;