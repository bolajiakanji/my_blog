'use client'

import { Badge, Box, Card, Flex, Grid, Heading } from '@radix-ui/themes'
import React, { useState } from 'react'
import pro , { Project } from './projects'
import { CldImage, CldVideoPlayer } from 'next-cloudinary'
import ExpandableText from './ExpandableText'
import 'next-cloudinary/dist/cld-video-player.css'
import Image from 'next/image'

import SimpleSlider from './czrousel'
import Link from 'next/link'
import sty from "../public/images/IMG-20241024-WA0019.jpg"


interface Modal extends Project {
  visible: boolean
}

const MyProject = () => {
  const [projects, setProject] = useState<Project[]>(pro)
  
    
    return (
      <Box className='mt-20   z-50 absolute left-0 w-full'>
        <Box className='relative'>
        

            <Grid 
                
          columns={{ initial: '1', sm: '2', md: '3',  }}
          display='grid'
                gap='3'
                justify='center'
                
      className=" p-2  mx-0  w-full "
      style={{  display: 'grid',  }}
      >
            {projects.map((project, index) => {
              if (project.category === 'mobile-app') {
                return (
                  <Link href={`/project/${index + 1}`} className=' overflow-hidden ' key={project.no} > 
                    <Card className='p-0 mx-auto ' style={{ width: '100%', maxWidth: '420px', }}>
                      <SimpleSlider tools={project.imageUrls} />
                  
                
                <Heading as='h3' size='6'>{project.title}</Heading>
                {project.tools?.map((tool) => (
              <Badge className='me-2'> {tool}</Badge>
          ))}
    

                  <ExpandableText description={project.description}></ExpandableText>
                  <Flex>
                      <Box>
                          
                      </Box>
                      <Box></Box>
                  </Flex>
                  
              </Card>   
              
                  </Link>
                
              )
            }
              
            return (
              
              <Link href={`/project/${index + 1}`} className=' overflow-hidden ' key={project.no} > 
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
                {project.tools?.map((tool) => (
              <Badge className='me-2'> {tool}</Badge>
          ))}
    

                  <ExpandableText description={project.description}></ExpandableText>
                  <Flex>
                      <Box>
                          
                      </Box>
                      <Box></Box>
                  </Flex>
                  
              </Card>   
              
                  </Link>
                  
              
                ) } )}
        </Grid>
          
        </Box>
        </Box>

  )
}





export default MyProject