<template>
    <div>
        <NavUser />
        <div class="container">
            <h1>Top:</h1>
            <hr />
            <router-link :to="'/blogs/new/'" class="btn btn-primary"> add </router-link><br />
            <br />
            <table class="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">title</th>
                <th scope="col">date</th>
            </tr>
            </thead>
            <tbody v-for="blog in blogs" v-bind:key="blog.id">
            <tr>
                <td>{{ blog.id }}</td>
                <td>
                    <h4>
                    <router-link :to="'/show/' + blog.id">{{ blog.title }}</router-link>
                    </h4>
                </td>
                <td>{{ blog.up_date }}</td>
            </tr>
            </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import {Mixin} from '../../mixin'
import NavUser from '../../components/Layouts/NavUser'
//import Navbar from '../../components/Layouts/Navbar'

export default {
  mixins:[Mixin],
  components: { NavUser },
  created () {
    this.database = firebase.firestore()
    this.baseUrl = this.sysConst.API_BASE;
//    console.log( this.baseUrl )
    this.getTasks()
  },
  data () {
    return {
      blogs: [],
      user_id : '',
      baseUrl : ''
    }
  },
  methods: {
    getTasks() {
        var items = []
        var self = this
        var dbRef = this.database.collection('blogs')
        dbRef = dbRef.orderBy("up_date", "desc")
        dbRef.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // console.log(doc.id, " => ", doc.data())
                var item = doc.data()
                var dt = item.up_date.toDate()
                var dt_str = dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + dt.getDate()
                console.log( dt_str )
                items.push({
                    id : doc.id,
                    title : item.title,
                    content : item.content,
                    up_date : dt_str
                })            
            })
            self.blogs = items
        })        
    },
  }
}
</script>
<!-- -->
<style>
div#div_head {
    padding : 0px;
    color: #fff;
    margin: 0 0 0px;
    width: 100%;
    background : #9575CD;
}
div#div_img_main2 {
    height: 300px;
    color: #FFF;
    margin: 0 0 0px;
    width: 100%;
    background:#ddd url(/hexo_3/images/bill-2.jpg ) no-repeat center center;
    background-size: cover;
    text-align: center;
}
</style>
