<template>
  <div class="home">
    <Nav />
    <Setupa />
  </div>
</template>

<script>
// @ is an alias to /src
import Setupa from '@/components/Setupa.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Setupa,Nav
  }
}
</script>
