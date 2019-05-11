<template lang="html">
    <div class="container">
            <h1>Tasks - create</h1>
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <button v-on:click="createTask()">投稿</button>    
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import jQuery from 'jquery'

export default {
    mixins:[Mixin],
    created() {
        this.baseUrl = this.sysConst.API_BASE;
        console.log(this.baseUrl);
//        this.check_userState(this.sysConst.STORAGE_KEY_userData, this)
//        this.user_id = this.get_userId(this.sysConst.STORAGE_KEY_userData )
        /* console.log( 'new.uid ='+ this.user_id )  */
    },
    data() {
        return {
            title:'',
            content:'',
            user_id: '',
            baseUrl : '',
        }
    },
    methods: {
        createTask: function() {
            console.log('#btn-1');
            var hostUrl= this.baseUrl + 'tasks/api_add';
            var title = this.title;
            var content = this.content;
        //    console.log(content);
            jQuery.ajax({
                url: hostUrl,
                type:'POST',
                dataType: 'json',
                data : { 'data[Task][title]' : title, 'data[Task][content]' : content},
                timeout:3000,
            }).done(function(data) {
                console.log("ajax-ok");
                console.log(data);
            }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax-error");
                console.log( errorThrown );
            })		
        },
    }
}
</script>
