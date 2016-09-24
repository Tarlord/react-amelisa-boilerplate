import React, { PropTypes } from 'react'
import { RootComponent } from 'react-amelisa'
import Loading from 'project-components/Loading'
import Page from './Page'
let isServer = process.title !== 'browser'
console.log(process.title)

class Root extends RootComponent {

  static propTypes = {
    children: PropTypes.element
  }

  componentDidMount () {
    let { model } = this.props
    window.onresize = () => model.emit('resize')
  }

  render () {
    let { children } = this.props
    console.log(isServer)
    // server rendering is disabled intentionally, because we do not need it
    // TODO: Make server rendering properly with faster loading api pages
    if (isServer) return <Loading />

    return <Page>{children}</Page>
  }
}

export default Root
