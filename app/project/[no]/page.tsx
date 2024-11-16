'use client'


import React, { useEffect, useState } from 'react'
import pro, { Project } from '../projects'

import { Card, Text, Heading, Badge } from '@radix-ui/themes';

import { CldImage } from 'next-cloudinary';
import ExpandableText from '../ExpandableText';
import SimpleSlider from '../czrousel';

interface Props {
    params: { no: string };
  }
  


const page = ({ params: { no } }: Props) => {
    const [modal, setModal] = useState({} as Project)
useEffect(() => {
    for (const x of pro) {
        
        if (x.no === parseInt(no)) {
            
            
            setModal(x)
            
    }
    }
}, [])
    
  return (
    <div className='mt-20   z-50 absolute left-0 w-full'><Card className='p-0 mx-auto 'style={{width:'100%',maxWidth:'420px', }}>
        
          <CldImage

src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg"

        alt="Description of my image"
        width='300'
  height='400'
  
    style={{
      objectFit: "cover",
     
         
        
        overflow: 'hidden',
        borderRadius: '10px',

      width: '100%',
      height: '150px'
        
         
         
      }}

  ></CldImage> 
  
          <Heading>{modal.title} </Heading>
          {modal.tools?.map((tool) => (
              <Badge className='me-2'> {tool}</Badge>
          ))}
    
<ExpandableText description={modal.description}></ExpandableText>

</Card>
</div>
  )
}

export default page