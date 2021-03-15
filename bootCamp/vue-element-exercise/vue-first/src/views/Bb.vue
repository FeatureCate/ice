<template>
  <div class="setup">
    <Navb />
    <Bbs />
  </div>
</template>

<script>
// @ is an alias to /src
import Navb from '@/components/Navb.vue'
import Bbs from '@/components/Bbs.vue'

export default {
  name: 'Bb',
  components: {
    Navb,Bbs
  }
}
</script>
