import React from 'react'

const Piece = ({ color, opacity, rotation }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='500'
      height='500'
      viewBox='0 0 500 500'
      className='piece'
      transform={rotation}
    >
      <g
        id='Gruppe_728'
        data-name='Gruppe 728'
        transform='translate(-17272 -10773)'
      >
        <circle
          id='Ellipse_414'
          data-name='Ellipse 414'
          cx='250'
          cy='250'
          r='250'
          transform='translate(17272 10773)'
          opacity='0'
        />
        <path
          id='Schnittmenge_1'
          data-name='Schnittmenge 1'
          d='M250,16.613a249.528,249.528,0,0,1,195.48,94.141L250,266.615Z'
          transform='translate(17272 10756.387)'
          fill={color}
          opacity={opacity}
        />
      </g>
    </svg>
  )
}

export default Piece
