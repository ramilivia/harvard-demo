import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '48em',
  lg: '64em',
  xl: '80em',
  '2xl': '96em'
})

export const theme = extendTheme({
  breakpoints,
  lineHeights: {
    tall: 1.8
  },
  colors: {
    orange: {
      600: '#EA580C'
    },
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6b7280',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    indigo: {
      50: '#a51c30' ,
      100: '#a51c30' ,
      200: '#a51c30' ,
      300: '#a51c30' ,
      400: '#a51c30' ,
      500: '#a51c30' ,
      600: '#a51c30' ,
      700: '#a51c30' ,
      800: '#a51c30' ,
      900: '#a51c30' ,
    },
    green: {
      500: '#10B981'
    }
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '65ch'
      }
    },
    Link: {
      variants: {
        INDIGO: {
          bg: 'indigo.600',
          color: 'white',
          _hover: {
            textDecoration: 'none',
            backgroundColor: 'indigo.700'
          }
        },
        WHITE: {
          bg: 'white',
          color: 'indigo.600',
          _hover: {
            textDecoration: 'none',
            backgroundColor: 'gray.50'
          }
        }
      }
    }
  },
  styles: {
    global: {
      'html, body': {
        color: 'gray.500'
      },
      'ul, ol': {
        listStyle: 'none'
      }
    }
  }
})
