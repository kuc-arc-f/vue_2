<template>
    <div>
        <h1>title : {{ item.title }}</h1>
        <div v-text="item.title"></div>
    </div>
</template>

<script>
import firebase from 'firebase'
import {Mixin} from '../../mixin'
//
export default {
    mixins:[Mixin],
    created() {
        this.database = firebase.firestore()
    },
    data: function( ) {
        var itemDat = {title : '', content : ''}
        return {
            item: itemDat,
            editFlg: false,
            updated: false,
            test1 : 'AA',
        }
    },
    mounted: function() {
        this.getItem()
    },
    methods: {
        getItem: function() {
            var tasks = this.get_exStorage(this.sysConst.STORAGE_KEY_tasksData)
            var pid = this.$route.params.id;
            /* console.log(tasks) */
            for(var i=0; i < tasks.length; i++){
                if(tasks[i].id==pid){
                    this.item = tasks[i]
                    /* console.log(tasks[i].id ) */
                }
            }
        },
    }
}
</script>


