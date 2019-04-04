<template>
  <section class="container">
    <div class="columns is-multiline">

      <div v-for="(item, i) in dog_list" v-bind:key="i" class=" is-3">
        <img :src="item.url">

        <!-- いいねとNEWの仮実装をしてみたやつ(サーバーにデータは送信されない) -->
        <!--<span v-if="i < 3" class="tag is-danger">NEW</span>-->
        <!--<a class="button is-warning  is-small" v-on:click="item.like += 1">-->
          <!--<span>いいね！{{item.like}}件</span>-->
        <!--</a>-->
      </div>
    </div>
  </section>
</template>

<script>
  import dogApi from '@/api/dog';
  import {mapState} from 'vuex';

  export default {
    async fetch({store, params}) {
      const json = await dogApi.dogs(params.breed);
      store.commit('dog_list_update', json)
    },
    computed: mapState(['dog_list']),
  }
</script>

<style>
  img {
    padding: 3px;
  }
</style>
