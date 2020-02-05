import React from 'react'

const Lines = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 500 500'
      className='lines'
    >
      <defs>
        <filter
          id='Pfad_423'
          x='240.349'
          y='240.512'
          width='126.995'
          height='242.864'
          filterUnits='userSpaceOnUse'
        >
          <feOffset input='SourceAlpha' />
          <feGaussianBlur stdDeviation='3' result='blur' />
          <feFlood floodOpacity='0.251' />
          <feComposite operator='in' in2='blur' />
          <feComposite in='SourceGraphic' />
        </filter>
      </defs>
      <g
        id='Gruppe_726'
        data-name='Gruppe 726'
        transform='translate(-16622 -10587)'
      >
        <path
          id='Pfad_420'
          data-name='Pfad 420'
          d='M250,0C388.071,0,500,111.929,500,250S388.071,500,250,500,0,388.071,0,250,111.929,0,250,0Z'
          transform='translate(16622 10587)'
          fill='rgba(255,255,255,0.15)'
          opacity='0'
        />
        <g
          id='Gruppe_716'
          data-name='Gruppe 716'
          transform='translate(16627.783 10588.246)'
        >
          <path
            id='Pfad_411'
            data-name='Pfad 411'
            d='M.075,180.49S0-32.754,0-68.254'
            transform='translate(244.19 68.254)'
            fill='none'
            stroke='#03b5c3'
            strokeLinecap='round'
            strokeWidth='1'
            strokeDasharray='4 8'
          />
          <path
            id='Pfad_421'
            data-name='Pfad 421'
            d='M-.529,144.646,194.715-11.242'
            transform='translate(244.717 104.184)'
            fill='none'
            stroke='#03b5c3'
            strokeLinecap='round'
            strokeWidth='1'
            strokeDasharray='4 8'
          />
          <path
            id='Pfad_422'
            data-name='Pfad 422'
            d='M.52-.35,243.4,54.912'
            transform='translate(243.717 249.254)'
            fill='none'
            stroke='#03b5c3'
            strokeLinecap='round'
            strokeWidth='1'
            strokeDasharray='4 8'
          />
          <g
            transform='matrix(1, 0, 0, 1, -5.78, -1.25)'
            filter='url(#Pfad_423)'
          >
            <path
              id='Pfad_423-2'
              data-name='Pfad 423'
              d='M.516-.321l107.66,223.53'
              transform='translate(249.5 250.5)'
              fill='none'
              stroke='#03b5c3'
              strokeLinecap='round'
              strokeWidth='1'
              strokeDasharray='4 8'
            />
          </g>
          <path
            id='Pfad_414'
            data-name='Pfad 414'
            d='M70.624-39.367-37.041,183.845'
            transform='translate(173.609 288.202)'
            fill='none'
            stroke='#03b5c3'
            strokeLinecap='round'
            strokeWidth='1'
            strokeDasharray='4 8'
          />
          <path
            id='Pfad_413'
            data-name='Pfad 413'
            d='M176.465-6.88-66.512,48.439'
            transform='translate(67.717 255.762)'
            fill='none'
            stroke='#03b5c3'
            strokeLinecap='round'
            strokeWidth='1'
            strokeDasharray='4 8'
          />
          <path
            id='Pfad_412'
            data-name='Pfad 412'
            d='M150.555,102.579-41.861-50.972'
            transform='translate(93.717 146.23)'
            fill='none'
            stroke='#03b5c3'
            strokeLinecap='round'
            strokeWidth='1'
            strokeDasharray='4 8'
          />
        </g>
      </g>
    </svg>
  )
}

export default Lines
