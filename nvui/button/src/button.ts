export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  ''
] as const

export const buttonSize = ['lg', 'md', 'sm', 'xs'] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export const buttonProps = {
  size: buttonSize,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ''
  },
  icon: {
    type: Object,
    default: ''
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button'
  },
  loading: Boolean,
  // loadingIcon: {
  //   type: Object,
  //   default: () => Loading
  // },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: undefined
  }
} as const
