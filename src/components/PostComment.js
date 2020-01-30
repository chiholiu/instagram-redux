import React, { useState } from 'react';
import { connect } from 'react-redux';
import { commentPhoto, postReply } from '../actions/index';

const PostComment = ({ id, commentPhoto, checkComment }) => {
    console.log(checkComment);
    const [commentValue, setCommentValue] = useState('');
    const [idValue, setIdValue] = useState('');

    const handleCommentChange = (id, event) => {
        event.preventDefault();
        setIdValue(id);
        setCommentValue(event.target.value);
    }

    const handleSubmit = () => {
        console.log(checkComment);
        if(checkComment) {
            commentPhoto(idValue, commentValue);
        } else {
            postReply(commentValue);
        }
        setCommentValue('');
        setIdValue('');
    }

    return (
        <div>
            <input type="text" value={ commentValue } onChange={(event) => handleCommentChange(id, event)}/>
            <button type="submit" onClick={handleSubmit}>Post</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    commentPhoto: (id, text) => dispatch(commentPhoto(id, text))
});

const mapStateToProps = state => {
    return {
        checkComment: state.imageData.enableToggleComment
    }
    // images: state.imageData,
    // checkComment: state.enableToggleComment
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComment);
