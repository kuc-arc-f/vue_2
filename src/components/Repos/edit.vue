<template lang="html">
    <div class="container">
        <h1>Repos - edit</h1>
        <div v-if="item">
            <div class="form-group">
                <label for="TopicTitle">Name</label>
                <input type="text" class="form-control" id="name" v-model="item.name" >
            </div>
            <div class="form-group">
                <label for="TopicContent">content</label>
                <textarea class="form-control" id="content" rows="3" v-model="item.content"></textarea>
            </div>
            <div class="form-group">
                <label for="TopicTitle">Url</label>
                <input type="text" class="form-control" id="url" v-model="item.url" >
            </div>
            <button v-on:click="updateTask" class="btn btn-primary">更新</button>
            <hr />
            <button v-on:click="deleteTask" class="btn btn-danger">削除</button>
            <hr />
            <router-link :to="'/repos'" class="btn btn-outline-primary"> List </router-link><br />            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import jQuery from 'jquery'
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created() {
        this.baseUrl = this.sysConst.API_BASE;
    },
    data() {
        return {
            item : null,
            baseUrl : '',
        }
    },
    mounted: function() {
        this.getItem();
    },
    methods: {
        getItem: function() {
            var url = this.baseUrl +'repos/api_edit/'+ this.$route.params.id;
            axios.get(url )
            .then( ( res ) => {
                this.item = res.data;
//                console.log(res.data )
            });                        
        },
        updateTask: function () {
            var self = this
            var hostUrl = this.baseUrl +'repos/api_update/'+ this.$route.params.id;
            jQuery.ajax({
                url: hostUrl,
                type:'POST',
                dataType: 'json',
                data : {
                    'data[Repo][id]' : this.$route.params.id, 
                    'data[Repo][name]' : this.item.name, 
                    'data[Repo][content]' : this.item.content,
                    'data[Repo][url]' : this.item.url,
                },
                timeout:3000,
            }).done(function(data) {
                console.log("ajax-ok");
                console.log(data);
                var arr=[{message : '更新が完了しました。'}]
                self.set_exStorage(self.sysConst.STORAGE_KEY_flash, arr )
                self.$router.push('/repos')         
            }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("ajax-error");
                console.log( errorThrown );
            })
        },
        deleteTask: function () {
            var self = this
            var url = this.baseUrl +'repos/api_delete/'+ this.$route.params.id;
            axios.get(url).then(res => {
                console.log(res.data );
                if(res.data.ret == 1){
                    console.log(res.data.ret );
                    var arr=[{message : '削除が完了しました。'}]
                    self.set_exStorage(self.sysConst.STORAGE_KEY_flash, arr )
                    self.$router.push('/repos')                             
                }else{
                    console.log(res.data );
                }
            });            
        }
    }
}
</script>
