import Vue from 'vue'
import Router from 'vue-router'
import page2 from '../components/page2'
import page3 from '../components/page3'

import home from '../components/Home'
import about from '../components/About'
//import FlashMessage from '../components/Layouts/FlashMessage'

import tasksIndex from '../components/Tasks/Index'
import tasksNew from '../components/Tasks/new'
import tasksShow from '../components/Tasks/show'
import tasksEdit from '../components/Tasks/edit'
import tasksTest from '../components/Tasks/test'
/* repos */
import reposIndex from '../components/Repos/Index'
import reposNew from '../components/Repos/new'
import reposShow from '../components/Repos/show'
import reposEdit from '../components/Repos/edit'
/* blogs */
import blogsIndex from '../components/Blogs/Index'
import blogsNew from '../components/Blogs/new'
import blogsShow from '../components/Blogs/show'
import blogsEdit from '../components/Blogs/edit'

Vue.use(Router)
//
export default new Router({
    /* mode: 'history', */
    routes: [
        { path: '/', component: home },
        { path: '/about', component: about },
        { path: '/page2', component: page2 },
        { path: '/page3', component: page3 },
        /* blogs */
        { path: '/blogs', component: blogsIndex },  
        { path: '/blogs/new', component: blogsNew },
        { path: '/blogs/show/:id', component: blogsShow },
        { path: '/blogs/edit/:id', component: blogsEdit },

        /* tasks */
        { path: '/tasks', component: tasksIndex },    
        { path: '/tasks/new', component: tasksNew },
        { path: '/tasks/show/:id', component: tasksShow },
        { path: '/tasks/edit/:id', component: tasksEdit },
        { path: '/tasks/test', component: tasksTest },
        /* repos */
        { path: '/repos', component: reposIndex },
        { path: '/repos/new', component: reposNew },
        { path: '/repos/show/:id', component: reposShow },
        { path: '/repos/edit/:id', component: reposEdit },

    ]
})
