<template>
    <div>
        <h1>Tasks- Index:</h1>
        <hr />
        <router-link :to="'/tasks/new/'">[ add ]</router-link>
        <hr />
        <br />
        <ul v-for="task in tasks" v-bind:key="task.id">
            <li>{{ task.title }} / id: {{ task.id }}
                <p>{{ task.content }}</p>
                <router-link :to="'/tasks/show/' + task.id">{{ task.title }}</router-link>
                &nbsp;<router-link :to="'/tasks/edit/' + task.id">[ edit ]</router-link>
            </li>
        </ul>        
    </div>
</template>

<script>
import firebase from 'firebase'
import {Mixin} from '../../mixin'
//
export default {
  mixins:[Mixin],
  created () {
    this.check_userState(this.sysConst.STORAGE_KEY_userData, this)
    this.user_id = this.get_userId(this.sysConst.STORAGE_KEY_userData )
    /* console.log( 'index.uid ='+ this.user_id ) */    
    this.getTasks()
  },
  data () {
    return {
      tasks: [],
      user_id : ''
    }
  },
  methods: {
    getTasks () {
        var items = []
        var self = this
        this.database = firebase.firestore()
        var dbRef = this.database.collection('tasks')
        dbRef = dbRef.where("uid", "==", this.user_id )
        /* dbRef = dbRef.orderBy("up_date", "desc") */
        dbRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                /* console.log(doc.id, " => ", doc.data()) */
                var item = doc.data()
                items.push({
                    id : doc.id,
                    title : item.title,
                    content : item.content
                })            
            })
            self.tasks = items
        })
    }
  }
}
</script>
