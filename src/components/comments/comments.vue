<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ username }}</span>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      text: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./comments.scss" scoped></style>
