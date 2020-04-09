<template>
<div>

  <div class="test">
    {{text}}
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      text: "这个是自定义插件-test",
    }
  },
  methods: {
   
  },
  watch: {
    $route(to, from) {
      
    }
  },
  mounted() {
    
  },
  beforeDestroy() {
  
  },
}
</script>

<style>
.test{
  position: absolute;
  bottom: 100px;
  right: 100px;
  font-size: 40px;
  color: red;
}
</style>
