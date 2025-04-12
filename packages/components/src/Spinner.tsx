import { FC, RefAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cm } from '@temp/classnames'

const spinnerVariants = cva('animate-spin rounded-full !border-b-transparent', {
  variants: {
    color: {
      primary: 'border-primary-500',
      secondary: 'border-secondary-500',
      tertiary: 'border-tertiary-500',
      info: 'border-info-500',
      success: 'border-success-500',
      warning: 'border-warning-500',
      danger: 'border-danger-500',
      default: 'border-default-500',
      light: 'border-light-50',
      dark: 'border-dark-900',
      inherit: 'border-inherit'
    },
    size: {
      sm: 'h-3 w-3 border',
      base: 'h-4 w-4 border-2',
      lg: 'h-5 w-5 border-2',
      xl: 'h-6 w-6 border-2'
    }
  },
  defaultVariants: {
    color: 'inherit',
    size: 'base'
  }
})

export interface ISpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}
const Spinner: FC<ISpinnerProps & RefAttributes<HTMLDivElement>> = forwardRef(
  ({ color, size, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cm(spinnerVariants({ color, size, className }))}
      ></div>
    )
  }
)

Spinner.displayName = 'Spinner'

export default Spinner
