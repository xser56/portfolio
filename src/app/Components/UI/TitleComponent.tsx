import React from 'react'

interface TitlesProp
{
    text: string
}

const TitleComponent: React.FC <TitlesProp> = ({ text }) => {

  return (
    <div>
        <h1 className='text-3xl font-bold mb-4'> {text} </h1>
    </div>
  )
}

export default TitleComponent
