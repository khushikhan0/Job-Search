<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://www.boredpanda.com/blog/wp-content/uploads/2020/08/5f2bceeb231b7_ewV775ZkoSPOwrPJBnZQJJrkOlX00fUxl4HkFJ3hZdQ__700.jpg'
    }
  }
}
</script>
