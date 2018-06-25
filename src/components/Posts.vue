<template>

  <store-provider module="posts" :actions="['addPost', 'deletePost', 'setMessage']" :getters="['count']">

    <section slot-scope="{ data, actions }">

        <div> Number of posts: {{ data.count }}</div>

        <div v-for="( post, index ) of data.posts" :key="index">
            {{ post.id }} {{ post.message }}
            <button @click="actions.deletePost( index )">x</button>
        </div>

        <input type="text" :value="data.message" @change="evt => actions.setMessage( evt.target.value )" />

        <button @click="actions.addPost( { message: data.message }  )"> add </button>
    </section>

  </store-provider>
</template>

<script>
  import StoreProvider from './StoreProvider'

  export default {
    components: { StoreProvider }
  }
</script>
