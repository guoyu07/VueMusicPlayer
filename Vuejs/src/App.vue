
<template>
  <div id="app">
    <Mheader></Mheader>
    <router-view></router-view>
  </div>
</template>

<script>
import Mheader from '@/components/my-header'
import Mfooter from '@/components/my-footer'
export default {
  components: {
      Mheader,
      Mfooter
    }
}
</script>

<style>
body{
  margin:0;
}

</style>
