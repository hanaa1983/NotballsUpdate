import ViewNotes from '@/pages/ViewNotes.vue'
import ViewEditNote from '@/pages/ViewEditNote.vue'
import ViewStats from '@/pages/ViewStats.vue'
import { createRouter,createWebHashHistory } from 'vue-router'
const routes = [
    {
        path:'/',
        name:'notes',
        component:ViewNotes

    },
    {
        path:'/editNote/:id',
        name:'edit-note',
        component:ViewEditNote

    },
    
    {
        path:'/stats',
        name:'stats',
        component:ViewStats
    }
]
const router = createRouter({
    history:createWebHashHistory(),routes
    
})
export default router