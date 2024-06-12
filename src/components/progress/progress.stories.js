import { ArgTypes, Description } from '@storybook/blocks'
import progress from './progress.vue'
import { template } from '@babel/core'

export default {
  title: 'Progress bar',
  components: { progress },
  ArgTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'When progress loaded'
    }
  }
}

export const defaultView = (args) => ({
  components: {
    xProgress: progress
  },
  data () {
    return { args }
  },
  template: `
    <x-progress @onFinish="args.onFinish"></x-progress>
  `
})
