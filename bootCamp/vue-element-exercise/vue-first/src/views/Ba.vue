<template>
  <div class="setup">
    <Nava />
    <Baa />
  </div>
</template>

<script>
// @ is an alias to /src
import Nava from '@/components/Nava.vue'
import Baa from '@/components/Baa'

export default {
  name: 'Ba',
  components: {
    Nava,Baa
  }
}
</script>
