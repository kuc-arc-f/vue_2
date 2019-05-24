<template>
    <div>
        <h1>tasks - test:</h1>
        <br />
        <!--
        <hr />
        test : {{ message }}
        -->
        <hr />
        <div v-html="str_md"></div>
    </div>
</template>

<script>
import {Mixin} from '../../mixin'
import marked from  'marked'

export default {
    mixins:[Mixin],
    created() {
        this.test_marked()
    },
    data() {
        return {
            user : [],
            message :'',
            str_md : ''
        }
    },
    methods: {
        test_marked() {
            this.str_md = marked('# Marked in the browser\n\nRendered by **marked**.')
            console.log(this.str_md)
        },
    }
}
</script>

