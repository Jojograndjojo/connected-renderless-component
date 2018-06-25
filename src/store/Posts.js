const state = {
    posts: [ { message: 'first post'} ],
    message: 'new post'
};

const actions = {
    addPost( { commit }, newPost ) {
        commit( 'addPost', newPost );
    },
    deletePost( { commit }, index ) {
        commit( 'deletePost', index );
    },
    setMessage( { commit }, message ) {
        commit( 'setMessage', message)
    }
};

const mutations = {
    addPost( state, post ) {
        state.posts.push( post )
    },
    deletePost( state, index ) {
        state.posts.splice(index, 1);
    },
    setMessage( state, message) {
        state.message = message
    }
};

const getters = {
    count( state ) {
        return state.posts.length
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}