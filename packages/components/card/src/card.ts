import type { ExtractPropTypes, PropType } from 'vue'

export type shadowType = 'always' | 'hover' | 'never'

export const cardProps = {
  shadow: {
    type: String as PropType<shadowType>,
    default: ''
  },
  button: Boolean
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>
