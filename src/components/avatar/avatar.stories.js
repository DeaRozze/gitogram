import avatar from './avatar.vue'

export default {
  title: 'avatar',
  components: { avatar }
}

export const defaultView = () => ({
  components: {
    avatar
  },
  template: `
  <avatar />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const borderedView = () => ({
  template: `
  <h1 style="border: 1px solid black">Hello World</h1>
  `
})

borderedView.story = {
  name: 'Стандартный вид'
}
