<template>
  <div class="setup">
    <Nav />
    <Setupb />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Setupb from '@/components/Setupb'

export default {
  name: 'Setup',
  components: {
    Nav,Setupb
  }
}
</script>
