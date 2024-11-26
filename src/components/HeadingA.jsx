import React from 'react'

const HeadingA = ({ className, text}) => {
    let inovet = text .replace("#", "<span class='one'>").replace( "#", "</span>" );


  return (
    <h1 className={className} dangerouslySetInnerHTML={ { __html: inovet }}></h1>
  )
}

export default HeadingA;