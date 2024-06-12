import avatar from './avatar.vue'

export default {
  title: 'Avatar',
  components: { avatar }
}

export const defaultView = () => ({
  components: { avatar },
  template: `
  <avatar :avatarUrl="'https://png.pngtree.com/png-clipart/20220430/original/pngtree-cute-cartoon-girl-avatar-social-media-png-image_7614123.png'" :nickname="'React.reposit'" />  
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
