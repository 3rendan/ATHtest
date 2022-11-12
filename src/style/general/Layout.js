import { createMuiTheme } from '@material-ui/core/styles'
// import * as Constants from '../../constants'
const primaryColor = "#999999"
const secondaryColor = "#C4D425"

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    }
  })

export default theme