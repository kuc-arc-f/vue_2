<template>
    <div class="container">
        <h1>Tasks- Index:</h1>
        <hr />
        <router-link :to="'/tasks/new/'">[ add ]</router-link><br />
        <br />
        <table class="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">content</th>
            <th scope="col">action</th>
        </tr>
        </thead>
        <tbody v-for="task in tasks" v-bind:key="task.id">
        <tr>
            <td>{{ task.id }}</td>
            <td><router-link :to="'/tasks/show/' + task.id">{{ task.title }}</router-link>
            </td>
            <td>{{ task.content }}</td>
            <td>&nbsp;<router-link :to="'/tasks/edit/' + task.id">[ edit ]</router-link>
            </td>
        </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import {Mixin} from '../../mixin'

export default {
  mixins:[Mixin],
  created () {
//    this.check_userState(this.sysConst.STORAGE_KEY_userData, this)
//    this.user_id = this.get_userId(this.sysConst.STORAGE_KEY_userData )
    this.baseUrl = this.sysConst.API_BASE;
    console.log( this.baseUrl )
    this.getTasks()
  },
  data () {
    return {
      tasks: [],
      user_id : '',
      baseUrl : ''
    }
  },
  methods: {
    getTasks() {
//        var url = this.conv_url('tasks/api_index')
        var url = this.baseUrl +'tasks/api_index'
        console.log(url)
        axios.get(url)
        .then(res =>  {
            this.tasks = res.data
            console.log(res.data.length )
        })
    },
    /*
    conv_url(url) {
        return baseUrl + url
    }    
    */
  }
}
</script>
