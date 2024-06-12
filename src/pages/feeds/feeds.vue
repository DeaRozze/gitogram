<template>
  <div class="topline">
    <topline>
      <template #headline>
        <h1>Gitogram /</h1>
        <ul class="headline__list">
          <li class="icon">
            <icon name='home' />
          </li>
          <li class="icon">
            <icon name='boy' />
          </li>
          <li class="icon">
            <icon name='door' />
          </li>
        </ul>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <storyUserItem :avatar="story.avatar" :username="story.username" @onPress="handlePress(story.id)" />
          </li>
        </ul>

      </template>
    </topline>
  </div>
  <div class="x-container">
    <div class="post">
      <div class="icon">
        <icon name='andrew' />
      </div>
      <post name="joshua_l" />
      <post title="Vue.js" />
      <post text="framework for building interactive web applications ⚡" subTitle="JavaScript"/>
      <div class="social">
          <div class="icon">
            <icon name="social"></icon>
          </div>
        </div>
      <toggler @onToggle="toggle" />
      <div class="comments" v-if="shown">
        <ul class="comments__list">
          <li class="comments__item">
            <comments text="Enable performance measuring in production, at the user's request" username="joshua_l" />
            <comments text="It's Impossible to Rename an Inherited Slot" username="Camille" />
            <comments text="transition-group with flex parent causes removed items to fly" username="Marselle" />
          </li>
        </ul>
      </div>

      <div class="icon">
        <icon name='girl' />
      </div>
      <post name="Camille" />
      <post title="React.js" />
      <post text="JavaScript library used for designing user interfaces" subTitle="Open source" />
      <div class="social">
          <div class="icon">
            <icon name="social"></icon>
          </div>
        </div>
      <toggler @onToggle="toggle" />
      <div class="comments" v-if="shown">
        <ul class="comments__list">
          <li class="comments__item">
            <comments text="Enable performance measuring in production, at the user's request" username="joshua_l" />
            <comments text="It's Impossible to Rename an Inherited Slot" username="Camille" />
            <comments text="transition-group with flex parent causes removed items to fly" username="Marselle" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { post } from '../../components/post'
import { toggler } from '../../components/toggler'
import { comments } from '../../components/comments'
import stories from './data.json'
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    post,
    toggler,
    comments
  },
  data () {
    return {
      stories,
      shown: true
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    },
    handlePress () {

    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 30px;
  height: 30px;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
}

.headline__list {
  display: flex;
}

.stories {
  display: flex;
  justify-content: space-between;
}

.post {
  padding-top: 30px;
}

.social {
  margin: 32px  20px  42px;
}

.comments {
  margin-bottom: 20px;
}
</style>
