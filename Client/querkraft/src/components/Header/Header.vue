<template>
    <header class="header">
        <logo />
        <navbar />
        <userarea />
    </header>
</template>

<script>
import Logo from '../Logo/Logo.vue'
import Navbar from '../NavBar/Navbar.vue'
import Userarea from '../Userarea/Userarea.vue'

export default {
    name: 'Header',
    components: {
        Logo, Navbar, Userarea
    }
}
</script>

<style scoped>

.box {
     flex: 1;
    display: flex;
    justify-content: center;
    }

.box:first-child > div { margin-right: auto; }

.box:last-child  > div { margin-left: auto; }

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#logo {
    padding-left: 2em;
    justify-content: flex-start;
}

#userarea {
    justify-content: flex-end;
    padding-right: 2em;
}
</style>