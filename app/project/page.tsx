'use client'

import { Box, Card, Flex, Grid, Heading } from '@radix-ui/themes'
import React, { useState } from 'react'
import pro , { Project } from './projects'
import { CldImage, CldVideoPlayer } from 'next-cloudinary'
import ExpandableText from './ExpandableText'
import 'next-cloudinary/dist/cld-video-player.css'
import Slider from 'react-slick';
import SimpleSlider from './czrousel'


interface Modal extends Project {
  visible: boolean
}

const MyProject = () => {
  const [projects, setProject] = useState<Project[]>(pro)
  
    
    return (
      <Box className='mt-20   z-50 absolute left-0 w-full'>
        <Box className='relative'>
            <Box className='relative w-64  z-10 mx-auto'>
                <CldVideoPlayer
                width='1620'
                height='1080'
                src='https://res.cloudinary.com/dlutiw9i4/video/upload/v1731143057/VID-20241103-WA0066_k4pxhx.mp4JK'
            
                
            >
            </CldVideoPlayer> 
                </Box>

            <Grid 
                
          columns={{ initial: '1', sm: '2', md: '3',  }}
          display='grid'
                gap='3'
                justify='center'
                
      className=" p-2  mx-0  w-full "
      style={{  display: 'grid',  }}
      >
          {projects.map((project) => (
              
             <div className=' overflow-hidden 'key={project.no} > 
              <Card className='p-0 mx-auto 'style={{width:'100%',maxWidth:'420px', }}>
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
                    height: '150px',
                    
                    
                      
                       
                       
                    }}
       
                ></CldImage>
                
                <Heading as='h3' size='6'>{project.title}</Heading>
                <SimpleSlider tools={project.tools} />

                  <ExpandableText description={project.description}></ExpandableText>
                  <Flex>
                      <Box>
                          
                      </Box>
                      <Box></Box>
                  </Flex>
                  
              </Card>   
              
                  </div>
                  
              
          ))}
        </Grid>
          
        </Box>
        </Box>

  )
}





export default MyProject