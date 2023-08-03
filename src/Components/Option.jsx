import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Option = ({title, image, url}) => {
  return (
    <div className="flex flex-col justify-center items-center border-black border-2 rounded-xl h-40 w-60">
    <Link className="rounded-xl p-2" href={url}>
        <Image src={image} height={60} width={60} alt='icon'></Image>
    </Link>
    <p>{title}</p>
  </div>
  )
}

export default Option