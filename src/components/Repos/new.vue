<template lang="html">
    <div>
            <h1>Repos - create</h1>
            <div class="form-group">
                <label for="TopicTitle">Name</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="content"></textarea>
            </div>
            <div class="form-group">
                <label for="TopicTitle">Url</label>
                <input type="text" class="form-control" id="url" v-model="url">
            </div>
            <button class="btn btn-primary" v-on:click="createItem()">投稿</button>
            <hr />
            <router-link :to="'/repos'" class="btn btn-outline-primary"> List </router-link><br />                
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import jQuery from 'jquery'

export default {
    mixins:[Mixin],
    created() {
        this.baseUrl = this.sysConst.API_BASE;
        console.log(this.sysConst.STORAGE_KEY_flash );
    },
    data() {
        return {
            name:'',
            content:'',
            url:'',
            user_id: '',
            baseUrl : '',
        }
    },
    methods: {
        createItem: function() {
            console.log('#btn-1');
            var hostUrl= this.baseUrl + 'repos/api_add';
            var name = this.name;
            var content = this.content;
            var url = this.url;
        //    console.log(content);
            var self = this
            jQuery.ajax({
                url: hostUrl,
                type:'POST',
                dataType: 'json',
                data : {
                    'data[Repo][name]' : name, 
                    'data[Repo][content]' : content,
                    'data[Repo][url]' : url,
                },
                timeout:3000,
            }).done(function(data) {
                console.log("ajax-ok");
//                console.log( self.sysConst.STORAGE_KEY_flash );
                var arr=[{message : '登録が完了しました。'}]
                self.set_exStorage(self.sysConst.STORAGE_KEY_flash, arr )
                console.log(data);
                self.$router.push('/repos')
            }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax-error");
                console.log( errorThrown );
            })		
        },
    }
}
</script>
