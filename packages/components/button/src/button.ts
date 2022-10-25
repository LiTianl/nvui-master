import type { ExtractPropTypes, PropType } from 'vue'

export type buttonTypes = 
  'default'|
  'primary'|
  'success'|
  'warning'|
  'info'|
  'danger'|
  'text'|
  ''

export type buttonSize = 'large'|'default'|'small'|'mini'|'full'
export type buttonNativeTypes = 'button'|'submit'|'reset'

export const buttonProps = {
  size: {
    type: String as PropType<buttonSize>,
    default:''
  },
  disabled: Boolean,
  type: {
    type: String as PropType<buttonTypes>,
    default: ''
  },
  icon: {
    type: Object,
    default: ''
  },
  nativeType: {
    type: String as PropType<buttonNativeTypes>,
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

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']

export type ButtonEmits = typeof buttonEmits


