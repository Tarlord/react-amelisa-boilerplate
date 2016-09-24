import jss from 'jss'
import camelCase from 'jss-camel-case'
import nested from 'jss-nested'
import vendorPrefixer from 'jss-vendor-prefixer'
import extend from 'jss-extend'

jss.use(extend())
jss.use(camelCase())
jss.use(nested())
jss.use(vendorPrefixer())

const styles = {
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '&:before, &:after': {
      boxSizing: 'border-box'
    }
  },
  'html, body': {
    overflow: 'hidden'
  },
  body: {
    fontFamily: 'sans-serif',
    fontSize: '12px',
    lineHeight: 'initial'
  },
  'html, body, div#root': {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '100vh',
    height: '100%'
  }
}

jss.createStyleSheet(styles, {named: false}).attach()
