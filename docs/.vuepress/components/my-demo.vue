<template>
<div>
  <button @click="change">{{buttonName}}</button>
  <pre><code class="javascript"> 
    test = { 
        name : function () { 
            return 'hello'; 
        }, 
        age : function () { 
            return 13; 
        } 
    } 
  </code></pre>
  <pre><code class="css"> .a{
      background: red
  }
  </code></pre>
</div>
</template>

<script>
export default {
  created() {
  },
  data() {
    return {
      buttonName: '按钮'
    }
  },
  methods: {
    change() {
      console.log(111);
    }
  }
};
</script>
