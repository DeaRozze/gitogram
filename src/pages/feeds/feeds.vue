<template>
  <div class="topline">
    <topline>
      <template #headline>
        <h1>Gitogram /</h1>
        <ul class="headline__list">
          <li class="icon"><icon name='home' /></li>
          <li class="icon"><icon name='boy' /></li>
          <li class="icon"><icon name='door' /></li>
        </ul>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.id">
            <storyUserItem
            :avatar="story.avatar"
            :username="story.username"
            @onPress="handlePress(story.id)"
            />
          </li>
        </ul>

      </template>
    </topline>
  </div>

  <div class="post">
    <post>
      <div class="profile">
        <div class="icon"><icon name='andrew' /></div>
        <h3>joshua_1</h3>
      </div>
      <div class="frame">
        <h2>Vue.js</h2>
        <div class="frame__text">
          <p>JavaScript framework for building interactive web applications ⚡</p>
        </div>
        <div class="social">
          <button class="social__button">Star</button>
          <div class="social__text">156k</div>
        </div>
        <div class="social">
          <button class="social__button">Fork</button>
          <div class="social__text">4</div>
        </div>
      </div>
      <div class="c-feed">
        <toggler @onToggle="toggle" />
      </div>
      <div class="comments" v-if="shown">
        <ul class="comments__list">
          <li class="comments__item" >
            <comments text="Enable performance measuring in production, at the user's request" username="joshua_l" />
            <comments text="It's Impossible to Rename an Inherited Slot" username="Camille" />
            <comments text="transition-group with flex parent causes removed items to fly" username="Marselle" />
          </li>
        </ul>
      </div>
    </post>
  </div>

  <div class="post">
    <post>
      <div class="profile">
        <div class="icon"><icon name='girl' /></div>
        <h3>Camille</h3>
      </div>
      <div class="frame">
        <h2>React.js</h2>
        <div class="frame__text">
          <p>Open source JavaScript library used for designing user interfaces</p>
        </div>
        <div class="social">
          <button class="social__button">Star</button>
          <div class="social__text">156k</div>
        </div>
        <div class="social">
          <button class="social__button">Fork</button>
          <div class="social__text">4</div>
        </div>
      </div>
      <div class="c-feed">
        <toggler @onToggle="toggle" />
      </div>
      <div class="comments" v-if="shown">
        <ul class="comments__list">
          <li class="comments__item" >
            <comments text="Enable performance measuring in production, at the user's request" username="joshua_l" />
            <comments text="It's Impossible to Rename an Inherited Slot" username="Camille" />
            <comments text="transition-group with flex parent causes removed items to fly" username="Marselle" />
          </li>
        </ul>
      </div>
    </post>
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
    }
  },
  handlePress () {
    console.log('Handled')
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

.profile {
  display: flex;
  align-items: baseline
}

.social {
  display: inline-flex;

  &__button{
    border: 1px solid black;

  }
  &__text {
    border: 1px solid black;
  }
}

.post {
  padding: 42px 0 32px;
}
</style>
