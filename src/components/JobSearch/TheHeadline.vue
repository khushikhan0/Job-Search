<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses" class="align-center">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job</h2>
  </section>
</template>

<script>
import nextElementInList from '@/utils/nextElementInList'

export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Reduce risk',
      interval: null
    }
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = [
          'Reduce risk',
          'Improve security',
          'Lower costs',
          'Accelerate transformation'
        ]
        this.action = nextElementInList(actions, this.action)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.reduce {
  color: #1a73e8;
}

.improve {
  color: #34a853;
}

.lower {
  color: #f9ab00;
}

.accelerate {
  color: #d93025;
}
</style>
