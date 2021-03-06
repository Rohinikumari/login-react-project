import React from 'react';
import reactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam"/>
            <CommentDetail author="Ram"/>
            <CommentDetail author="Avi"/>            
        </div>
    );
}

reactDOM.render(
    <App />, document.querySelector('#root')
);