<template>
    <div>
        <flash-message></flash-message>
        <h1>Repos - Index:</h1>
        <hr />
        <router-link :to="'/repos/new/'" class="btn btn-primary"> add </router-link><br />
        <hr />
        <!-- -->
        <div class="form-row align-items-center">
            <div class="col-auto">
                <input type="text" v-model="search" class="form-control mb-2" placeholder="Search keyword" size="60">
            </div>
            <div class="col-auto">
            <button type="submit" v-on:click="search_item()" class="btn btn-outline-primary">Search</button>
            </div>
        </div>
        <table class="table">
        <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">content</th>
            <!--
            <th scope="col">url</th>
            -->
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
            <!--
            <td>
               <a v-bind:href="repo.url">{{ repo.url }}</a> 
            </td>
            -->
            <td>&nbsp;<router-link :to="'/repos/edit/' + repo.id" class="btn btn-outline-primary"> edit </router-link>
            </td>
        </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import flashMessage from '../../components/Layouts/FlashMessage'
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    components: { flashMessage },
    created () {
        this.baseUrl = this.sysConst.API_BASE;
        //console.log( this.STORAGE_KEY_flash )
        this.getTasks()
    },
    data () {
        return {
        repos: [],
        search : '',
        user_id : '',
        baseUrl : ''
        }
    },
  methods: {
    getTasks() {
        var url = this.baseUrl +'repos/api_index'
        console.log(url)
        axios.get(url).then(res =>  {
//            console.log(res.data)
            this.repos = res.data
        })
    },
    search_item(){
        var url = this.baseUrl +'repos/api_index?search='+ this.search
        console.log(url)
        axios.get(url).then(res =>  {
//            console.log(res.data)
            this.repos = res.data
        })
        console.log(this.search )
    },
  }
}
</script>
