export const types = {
    TOGGLE_LIKE_PHOTO: 'TOGGLE_LIKE_PHOTO',
    ADD_COMMENT: 'ADD_COMMENT',
    TOGGLE_LIKE_COMMENT: 'TOGGLE_LIKE_COMMENT',
    REPLY_COMMENT: 'REPLY_COMMENT',
    ENABLE_REPLY: 'ENABLE_REPLY',
    OPEN_INPUT_COMMENT: 'OPEN_INPUT_COMMENT',
    TOGGLE_LIKE_REPLY: 'TOGGLE_LIKE_REPLY',
    TOGGLE_INPUT: 'TOGGLE_INPUT',
    ENABLE_REPLY_CHILD: 'ENABLE_REPLY_CHILD'
 
}

export const addPhoto = () => {
}

export const likePhoto = (index) => ({
    type: types.TOGGLE_LIKE_PHOTO,
    index
});

export const addComment = (id, newComment) => {
    return {
        type: types.ADD_COMMENT,
        id,
        newComment
    }
}

export const replyComment = (generalIndex, replyText, toggle, majorIndex, minorIndex) => {
    return {
        type: types.REPLY_COMMENT,
        generalIndex,
        replyText,
        toggle,
        majorIndex,
        minorIndex
    }
}

export const likeComment = (generalIndex, commentIndex) => {
    return {
        type: types.TOGGLE_LIKE_COMMENT,
        generalIndex,
        commentIndex
    }
};

export const likeReply = (generalIndex, commentIndex, replyIndex) => {
    console.log(generalIndex, commentIndex, replyIndex);
    return {
        type: types.TOGGLE_LIKE_REPLY,
        generalIndex,
        commentIndex,
        replyIndex
    }
};

export const enableReply = (generalIndex, commentIndex, enablingReply) => {
    return {
        type: types.ENABLE_REPLY,
        generalIndex,
        commentIndex,
        enablingReply,
    }
}

export const enableReplyChild = (generalIndex, commentIndex, nestedCommentIndex, enablingReply) => {
    console.log(generalIndex, commentIndex, nestedCommentIndex, enablingReply);
    return {
        type: types.ENABLE_REPLY_CHILD,
        generalIndex, 
        commentIndex, 
        nestedCommentIndex,
        enablingReply
    }
}

export const openInputComment = (currentIndex) => {
    return {
        type: types.OPEN_INPUT_COMMENT,
        currentIndex
    }
}

export const editCommentPhoto = () => {  
}

export const removeCommentPhoto = () => {
}

export const likeCommentPhoto = () => { 
}

export const toggleInput = (inputToggle) => ({
    type: types.TOGGLE_INPUT,
    inputToggle
})
