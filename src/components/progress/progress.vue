<template>
  <div class="progress" :class="{ active }">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
export default {
  title: 'progress',
  emits: ['onFinish'],
  data () {
    return {
      active: false
    }
  },
  methods: {
    emitOnFinish () {
      debugger
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.active = true
    })

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener(
      'transitionend',
      this.emitOnFinish
    )
  }
}
</script>

<style scoped>
  .progress {
    background: rgba(49, 174, 84, 0.3);
    height: 2px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    &.active{
      .indicator {
        width: 100%;
      }
    }
  }

  .indicator{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background:rgb(49, 174, 84);
    transform: 5s;
  }
</style>
