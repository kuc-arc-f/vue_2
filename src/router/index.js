import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/Home'
import about from '../components/About'
import top_page from '../components/Blogs/top'
import show from '../components/Blogs/show'

import tasksNew from '../components/Tasks/new'
import tasksIndex from '../components/Tasks/Index'
import tasksShow from '../components/Tasks/show'
import tasksEdit from '../components/Tasks/edit'
import tasksTest from '../components/Tasks/test'

import usersLogout from '../components/Users/Logout'
import usersCheck from '../components/Users/check'
import usersLogin from '../components/Users/Login'
import usersNew from '../components/Users/new'
/* blogs */
import blogsIndex from '../components/Blogs/Index'
import blogsNew from '../components/Blogs/new'
//import blogsShow from '../components/Blogs/show'
import blogsEdit from '../components/Blogs/edit'

Vue.use(Router)
//
export default new Router({
    /* mode: 'history', */
    routes: [
        { path: '/', component: top_page },
        { path: '/show/:id', component: show },

        { path: '/home', component: home },
        { path: '/about', component: about },
//        { path: '/page2', component: page2 },
//        { path: '/page3', component: page3 },
        /* blogs */
        { path: '/blogs', component: blogsIndex },
        { path: '/blogs/new', component: blogsNew },
//        { path: '/blogs/show/:id', component: blogsShow },
        { path: '/blogs/edit/:id', component: blogsEdit },
        /* tasks */
        { path: '/tasks/new', component: tasksNew },
        { path: '/tasks', component: tasksIndex },
        { path: '/tasks/show/:id', component: tasksShow },
        { path: '/tasks/edit/:id', component: tasksEdit },
        { path: '/tasks/test', component: tasksTest },
        /* users */
        { path: '/users/logout', component: usersLogout },
        { path: '/users/check', component: usersCheck },
        { path: '/users/login', component: usersLogin },
        { path: '/users/new', component: usersNew },

    ]
})
