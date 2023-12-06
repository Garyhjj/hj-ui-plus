import { ExtractPropTypes } from 'vue'

export const loopPlayProps = {
  roundTime: {
    type: Number,
    default: 1000 * 12
  },
  direction: {
    type: String,
    default: 'y' //  'x'
  },
  immediate: {
    type: Boolean,
    default: true
  }
}

export type LoopPlayProps = ExtractPropTypes<typeof loopPlayProps>
