<template>
    <div>
        <div v-if="item">
            <h1>Name : {{ item.name }}</h1><br />
            Content :<br />
            <div v-text="item.content"></div><br />
            Url :<br />
            <a v-bind:href="item.url">{{ item.url }}</a>
        </div>
        <hr />
        <router-link :to="'/repos'" class="btn btn-outline-primary"> List </router-link><br />
    </div>
</template>

<script>
import axios from 'axios'
import {Mixin} from '../../mixin'

export default {
    mixins:[Mixin],
    created() {
        this.baseUrl = this.sysConst.API_BASE;
        console.log( this.baseUrl )        
    },
    data: function( ) {
//        var itemDat = {title : '', content : ''}
        return {
            item: null,
            editFlg: false,
            updated: false,
            baseUrl : '',
        }
    },
    mounted: function() {
        this.getItem()
    },
    methods: {
        getItem: function() {
            var url = this.baseUrl +'repos/api_view/'+ this.$route.params.id;
            axios.get(url )
            .then( ( res ) => {
                console.log(res.data )
                this.item = res.data;
            });            
        },
    }
}
</script>


