<template>
    <div>
        <h1>title : {{ item.title }}</h1>
        <div v-text="item.content"></div>
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
        var itemDat = {title : '', content : ''}
        return {
            item: itemDat,
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
            var url = this.baseUrl +'tasks/api_view/'+ this.$route.params.id;
            axios.get(url )
            .then( ( res ) => {
                this.item = res.data;
                console.log(res.data )
            });            
        },
    }
}
</script>


