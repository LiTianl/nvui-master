import type { ExtractPropTypes } from 'vue'

export const iconProps = {
  iconClass: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '16px'
  }
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
