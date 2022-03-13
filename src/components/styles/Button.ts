import { css, keyframes } from '../../styles'

const pulsing = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 1
  },
  '50%': {
    transform: 'scale(.8)',
    opacity: 0.3
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1
  }
})

export const ButtonCSS = css({
  minHeight: '2.125rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',

  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: '.125rem',
  color: 'white',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '.875rem',
  fontWeight: 700,
  lineHeight: '1rem',
  padding: '.625rem .75rem',
  transition: 'color 250ms, background-color 250ms, border-color 250ms',

  '& .loading': {
    display: 'flex',
    gap: '.25rem',

    '& .dot': {
      width: '.375rem',
      height: '.375rem',

      backgroundColor: 'currentColor',
      borderRadius: '50%',

      animation: `${pulsing} 1.5s ease-in-out infinite`,

      '&:nth-of-type(2)': {
        animationDelay: '175ms'
      },

      '&:nth-of-type(3)': {
        animationDelay: '350ms'
      }
    }
  },

  '& > .icon': {
    fontSize: '1rem'
  },

  variants: {
    style: {
      primary: {
        backgroundColor: '$primary500',
        borderColor: '$primary500',

        '&:hover': {
          backgroundColor: '$primary600',
          borderColor: '$primary600'
        },

        '&:active': {
          backgroundColor: '$primary700',
          borderColor: '$primary700'
        }
      },
      outlined: {
        color: '$gray400',
        borderColor: '$gray400',
        fontWeight: 400,

        '&:hover': {
          color: '$gray500',
          borderColor: '$gray500'
        },

        '&:active': {
          background: '$gray50',
          color: '$gray600',
          borderColor: '$gray600'
        }
      }
    }
  },

  defaultVariants: {
    style: 'primary'
  }
})
