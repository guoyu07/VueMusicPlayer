
<template>
  <div id="app">
    <Mheader></Mheader>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import Mheader from '@/components/my-header'
export default {
  components: {
      Mheader,
    }
}
</script>

<style>
body{
  margin:0;
}

</style>
