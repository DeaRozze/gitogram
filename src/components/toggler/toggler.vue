<template>
  <button :class="['button', {'active': isOpened}]" @click="toggle">
    <span class="text">{{ isOpened ? "Hide" : "Show" }} issues</span>
    <span class="icon">
      <icon name="string" />
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  data () {
    return {
      isOpened: true
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
