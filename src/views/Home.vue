<template>
  <div class="home">
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

interface State {
  text: string
}

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const state: State = reactive({
      text: 'reactive',
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>
