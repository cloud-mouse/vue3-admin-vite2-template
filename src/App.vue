<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}

</style>
