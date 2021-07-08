import React from 'react'
import { Route } from 'react-router-dom'

 const BlankLayout = (props) => <React.Fragment>{props.children}</React.Fragment>;



export default function AppRoute({ component: Component, layout: Layout=BlankLayout, ...rest }) {
    return (
        <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...rest} {...props}></Component>
      </Layout>
    )}></Route>
    )
}
