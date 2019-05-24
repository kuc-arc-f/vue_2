<template>
    <div>
        <h1>Repos - Index:</h1>
        <hr />
        <router-link :to="'/repos/new/'" class="btn btn-primary"> add </router-link><br />
        <br />
        <table class="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">content</th>
            <th scope="col">url</th>
            <th scope="col">action</th>
        </tr>
        </thead>
        <tbody v-for="repo in repos" v-bind:key="repo.id">
        <tr>
            <td>{{ repo.id }}</td>
            <td>
                <h4>
                <router-link :to="'/repos/show/' + repo.id">{{ repo.name }}</router-link>
                </h4>
            </td>
            <td>{{ repo.content }}</td>
            <td>
               <a v-bind:href="repo.url">{{ repo.url }}</a> 
            </td>
            <td>&nbsp;<router-link :to="'/repos/edit/' + repo.id" class="btn btn-outline-primary"> edit </router-link>
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
    this.baseUrl = this.sysConst.API_BASE;
    console.log( this.baseUrl )
    this.getTasks()
  },
  data () {
    return {
      repos: [],
      user_id : '',
      baseUrl : ''
    }
  },
  methods: {
    getTasks() {
//        var url = this.conv_url('tasks/api_index')
        var url = this.baseUrl +'repos/api_index'
        console.log(url)
        axios.get(url)
        .then(res =>  {
            console.log(res.data)
            this.repos = res.data
            console.log(res.data.length )
        })
    },
  }
}
</script>
