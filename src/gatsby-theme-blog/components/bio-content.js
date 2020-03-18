import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Bu sayfa <Styled.a href="https://bau.edu.tr">BAU</Styled.a>
    {` `}
    yazılım ve bilişim kulübü
    <br />
    etkinliklerinin paylaşıldıği bir blogtur.
  </Fragment>
)