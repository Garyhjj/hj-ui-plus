import { withInstall } from '@hj-ui-plus/utils'
import LoopPlay from './src/index.vue'

export const HjLoopPlay = withInstall(LoopPlay)
export default HjLoopPlay

export type HjLoopPlayInstance = InstanceType<typeof LoopPlay>

export * from './src/types'
