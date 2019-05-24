<template>
    <div>
        <ul>
            <li class="nav-item active">
                <router-link  to="/" class="nav-link">Top</router-link>
            </li>
            <!--
            <li class="nav-item active">
                <router-link  to="/home" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item active">
                <router-link  to="/about" class="nav-link">About</router-link>
            </li>
            -->
            <li class="nav-item active">
                <router-link  to="/blogs" class="nav-link">Blogs</router-link>
            </li>
        </ul>
        <hr />
    </div>
</template>

<script>
export default {
  created () {
    /* console.log('AA') */
  }
}
</script>
