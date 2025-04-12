import { FC, RefAttributes, forwardRef } from 'react'
import { cm } from '@temp/classnames'
import type { commonTypes } from './types'
import Spinner from './Spinner'

const btnStyles = {
  base: 'flex gap-2 items-center justify-center',
  variant: {
    flat: {
      primary: 'bg-transparent hover:bg-primary-50 text-primary-500',
      secondary: 'bg-transparent hover:bg-secondary-50 text-secondary-500',
      tertiary: 'bg-transparent hover:bg-tertiary-50 text-tertiary-500',
      success: 'bg-transparent hover:bg-success-50 text-success-500',
      warning: 'bg-transparent hover:bg-warning-50 text-warning-500',
      danger: 'bg-transparent hover:bg-danger-50 text-danger-500',
      info: 'bg-transparent hover:bg-info-50 text-info-500',
      default: 'bg-transparent hover:bg-default-50 text-default-500',
      light: 'bg-transparent hover:bg-light-100 text-light-50',
      dark: 'bg-transparent hover:bg-dark-50 text-dark-900',
    },
    solid: {
      primary:
        'bg-primary-500 hover:bg-primary-600 text-primary-text border-primary-text border-0',
      secondary:
        'bg-secondary-500 hover:bg-secondary-600 text-secondary-text border-secondary-text border-0',
      tertiary:
        'bg-tertiary-500 hover:bg-tertiary-600 text-tertiary-text border-tertiary-text border-0',
      success:
        'bg-success-500 hover:bg-success-600 text-light-100 border-light-100 border-0',
      warning:
        'bg-warning-500 hover:bg-warning-600 text-dark-900 border-dark-900 border-0',
      danger:
        'bg-danger-500 hover:bg-danger-600 text-light-100 border-light-100 border-0',
      info: 'bg-info-500 hover:bg-info-600 text-light-100 border-light-100 border-0',
      default:
        'bg-default-500 hover:bg-default-600 text-dark-900 border-dark-900 border-0',
      light:
        'bg-light-100 hover:bg-light-200 text-dark-950 border-dark-950 border-0',
      dark: 'bg-dark-900 hover:bg-dark-950 text-light-100 border-light-100 border-0',
    },
    outlined: {
      primary:
        'bg-transparent border text-primary-500 border-primary-500 hover:bg-primary-50',
      secondary:
        'bg-transparent border text-secondary-500 border-secondary-500 hover:bg-secondary-50',
      tertiary:
        'bg-transparent border text-tertiary-500 border-tertiary-500 hover:bg-tertiary-50',
      success:
        'bg-transparent border text-success-500 border-success-500 hover:bg-success-50',
      warning:
        'bg-transparent border text-warning-500 border-warning-500 hover:bg-warning-50',
      danger:
        'bg-transparent border text-danger-500 border-danger-500 hover:bg-danger-50',
      info: 'bg-transparent border text-info-500 border-info-500 hover:bg-info-50',
      default:
        'bg-transparent border text-default-500 border-default-500 hover:bg-default-50',
      light:
        'bg-transparent border text-light-50 border-light-50 hover:bg-light-100',
      dark: 'bg-transparent border text-dark-800 border-dark-800 hover:bg-dark-50',
    },
    soft: {
      primary: 'bg-primary-50 hover:bg-primary-100 text-primary-500',
      secondary: 'bg-secondary-50 hover:bg-secondary-100 text-secondary-500',
      tertiary: 'bg-tertiary-50 hover:bg-tertiary-100 text-tertiary-500',
      success: 'bg-success-50 hover:bg-success-100 text-success-500',
      warning: 'bg-warning-50 hover:bg-warning-100 text-warning-500',
      danger: 'bg-danger-50 hover:bg-danger-100 text-danger-500',
      info: 'bg-info-50 hover:bg-info-100 text-info-500',
      default: 'bg-default-50 hover:bg-default-100 text-default-500',
      light: 'bg-light-100 hover:bg-light-200 text-light-50',
      dark: 'bg-dark-50 hover:bg-dark-100 text-dark-900',
    }
  },
  radius: {
    none: 'rounded-none',
    soft: 'rounded',
    round: 'rounded-full'
  },
  size: {
    sm: 'text-sm/8 px-4',
    base: 'text-base/9 px-5',
    lg: 'text-base/9 px-5 font-semibold',
    xl: 'text-base/10 px-6 font-semibold'
  },
  transition: 'hover:scale-105 transition-all duration-200',
  block: 'w-full'
}

export interface TButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  color?: commonTypes['color']
  variant?: commonTypes['variant']
  size?: commonTypes['size']
  radius?: commonTypes['radius']
  loading?: boolean
  scaleUp?: boolean
  block?: boolean
}

const Button: FC<TButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef(
  (props, ref) => {
    const {
      color = 'primary',
      className,
      size = 'base',
      type = 'button',
      variant = 'solid',
      radius = 'none',
      scaleUp = false,
      block = false,
      loading = false,
      children,
      ...rest
    } = props

    const btnClass = cm(
      btnStyles.base,
      scaleUp ? btnStyles.transition : '',
      block ? btnStyles.block : 'w-auto',
      btnStyles.radius[radius],
      btnStyles.variant[variant][color],
      btnStyles.size[size],
      className
    )

    return (
      <button className={btnClass} ref={ref} type={type}  {...rest}>
        {loading ? (
          <Spinner
            color={variant === 'solid' ? 'inherit' : color}
            size={size === 'sm' ? size : 'base'}
          />
        ) : null}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
