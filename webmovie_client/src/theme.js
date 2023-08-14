import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, teal, deepOrange, orange } from '@mui/material/colors'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '600px'
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const BOARD_CONTENT = '1000px'
const theme = extendTheme({
  webCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT
  },
  colors: {
    primary: teal,
    secondary: deepOrange,
    tertiary: cyan,
    quaternary: orange,
    menuItemDark: 'white',
    menuItemLight: 'black'
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          fontFamily:'sans-serif',
          color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
          '&:hover': { borderWidth: '0.5px', opacity: 0.7, backgroundColor: '#777777' },
          '&.MuiButtonBase-root': {
            fontSize: '17px',
            backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')
          }
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar ': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb ': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover ': {
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& fieldset': {
            borderWidth: '1px !important'
          },
          '&:hover fieldset': {
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset': {
            borderWidth: '2px !important'
          }
        }
      }
    }
  }
})
export default theme