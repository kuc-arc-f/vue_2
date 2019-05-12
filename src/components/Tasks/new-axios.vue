<template lang="html">
    <div class="container">
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <button v-on:click="createTask">投稿</button>    
    </div>
</template>

<script>
import axios from 'axios'
import {Mixin} from '../../mixin'
var baseUrl = 'http://localhost/cakephp2/';
/* import jQuery from 'jquery' */
console.log(baseUrl);
//
export default {
    mixins:[Mixin],
    created() {
        //this.check_userState(this.sysConst.STORAGE_KEY_userData, this)
        //this.user_id = this.get_userId(this.sysConst.STORAGE_KEY_userData )
        /* console.log( 'new.uid ='+ this.user_id )  */
    },
    data() {
        return {
            title:'',
            content:'',
            user_id: '',
        }
    },
    methods: {
        createTask: function() {
            console.log('#btn-1');
            var task = {
                'data[Task][title]': this.title,
                'data[Task][content]': this.content
            };
            axios.post(baseUrl+ 'tasks/api_add' ,task).then(res => {
                console.log(res.data.title);
                console.log(res.data.content);
            });            
        },
    }
}
</script>
