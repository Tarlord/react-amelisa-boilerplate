import React, { Component, PropTypes } from 'react'
import useSheet from 'react-jss'

class Home extends Component {

  static propTypes = {
    sheet: PropTypes.object
  }

  static contextTypes = {
    model: PropTypes.object
  }

  render () {
    console.log(this.constructor.name, 'render')
    let { classes } = this.props.sheet

    return (
      <div className={classes.Home}>
        Home Page!
      </div>
    )
  }
}

const styles = {
  Home: {
    flex: 1,
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default useSheet(styles)(Home)
