<template>
<div class="avatar">
  <div class="avatar__logo">
    <img :src="avatarUrl" alt="" class="avatar__logo-img" />
  </div>
  <div class="avatar__text">
    <p>{{  nickname }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'avatar',
  props: {
    avatarUrl: String,
    nickname: String
  }
}
</script>

<style scoped>

.avatar {
  display: flex;
  align-items: center;

}

  .avatar__logo-img {
    width: 50px;
    height: 50px;
    margin-right:12px;
  }

  .avatar__text {
    font-weight: bold;
  }
</style>
