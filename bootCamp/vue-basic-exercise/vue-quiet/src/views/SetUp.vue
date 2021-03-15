<template>
  <div class="home">
    <Nav />
    <Up />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Up from '@/components/Up.vue'

export default {
  name: 'Home',
  components: {
    Up,Nav
  }
}
</script>
