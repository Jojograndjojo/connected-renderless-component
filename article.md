# Connected Renderless Components

Let's start with a simple Vuex store.

```javascript
const state = {
    posts: [ { message: 'first post' } ],
};

const actions = {
    addPost( { commit }, newPost ) {
        commit( 'addPost', newPost );
    }
};

const mutations = {
    addPost( state, post ) {
        state.posts.push( post )
    }
};

export default {
    state,
    mutations,
    actions
}
```

In order to use the store's state and actions we need to map them inside of a component. <br>
Vuex provides the handy ```mapState``` and ```mapActions``` helper methods.

