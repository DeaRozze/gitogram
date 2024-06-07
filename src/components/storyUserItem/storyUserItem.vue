<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img :src="avatar" alt="" class="img">
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  name: 'storyUserItem',
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border:2px purple solid;
  padding: 3px;
}
</style>
