import React from 'react'

import styles from './styles.module.css'

export const PageNotFound = ({heading, content, wrapperCSS, headingCSS, contentCSS}) => (
<div className={ wrapperCSS }>
  <div className={ contentCSS }>
    { content }
  </div>
  <h1 className={ headingCSS }>{ heading }</h1>
</div>
)



PageNotFound.propTypes = {
    heading: React.PropTypes.string,
    content: React.PropTypes.string,
    wrapperCSS: React.PropTypes.string,
    headingCSS: React.PropTypes.string,
    contentCSS: React.PropTypes.string
};

PageNotFound.defaultProps = {
    heading: '404',
    content: 'Page Not Found',
    wrapperCSS: styles.wrapper,
    headingCSS: styles.title,
    contentCSS: styles.content
};

export default PageNotFound
