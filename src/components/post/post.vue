<template>
  <div class="profile">
        <h3 class="name">{{ name }}</h3>
      </div>
      <div class="frame">
        <h2 class="title">{{title}}</h2>
        <div class="frame__text">
          <p>
          <span class="subTitle"> {{ subTitle }}</span>
          {{text}}</p>
        </div>
        <div class="social">
          <div class="icon">
            <icon name="social"></icon>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subTitle: {
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
<style lang="scss" src="./post.scss" scoped>

</style>
