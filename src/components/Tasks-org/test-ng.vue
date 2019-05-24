<template>
    <div  id="app_test">
        <h1>tasks- test:</h1>
        <hr />
        test : {{ message }}
        <hr />
        <div id="content"></div>
    </div>
</template>

<script>
import Vue from 'vue'
//import {Mixin} from '../../mixin'
import marked from  'marked'

new Vue({
  el: '#app_test',
  created () {
    this.test_marked()
  
  },
  data: {
    current: 1,
  },
  methods: {
    test_marked() {
      window.document.getElementById('content').innerHTML =
        marked('# Marked in the browser\n\nRendered by **marked**.');
    },
  }
})
</script>

