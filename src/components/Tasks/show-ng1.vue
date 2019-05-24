<template>
    <div>
        <h1>title : {{ item.title }}</h1>
        <div v-text="item.title"></div>
    </div>
</template>

<script>
import firebase from 'firebase'
import Vue from 'vue'
//
export default {
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
            var docRef = this.database.collection("tasks").doc( this.$route.params.id )
            this.setItems (docRef, this.item)
            window.setTimeout(function() {
                /* this.item = items[0] */
                console.log( this.item.title )
                Vue.$forceUpdate
            }, 1000);
        },
        setItems (docRef, item) {
            var items = []
            docRef.get().then(function(doc, item) {
                var task = doc.data()
                items.push({
                    title: task.title
                })
                item = items[0]
            }).catch(function(error) {
                console.log("Error getting document:", error);
            })
        }
    }
}
</script>


