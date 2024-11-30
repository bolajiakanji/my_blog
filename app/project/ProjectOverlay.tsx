import React, { SetStateAction } from 'react'
import { Project } from './projects';
import { Badge, Box, Card, Heading } from '@radix-ui/themes';
import { Overlay } from './page';
import { CldImage, CldVideoPlayer } from 'next-cloudinary';
import ExpandableText from './ExpandableText';

interface Props  {
    overlayProject: Overlay;
    setOverlay: React.Dispatch<SetStateAction<Overlay>>
    
}

const ProjectOverlay = ({ overlayProject, setOverlay }: Props) => {
    

    if (!overlayProject.length) return null
    
    if (overlayProject[0]?.category === 'mobile-app') {
        return (
            <Box className='absolute w-full left-0 top-0 backdrop-blur-xl z-40 '>
                <Box className='relative' >
                    <Box onClick={() => setOverlay([])} className='absolute top-3 left-3 z-10 text-xl text-white p-3 rounded-full bg-black'>X</Box>
          <Box className='w-full mx-auto md:w-65%'>

            <Card
            className="p-0 mx-auto "
            style={{ width: "100%", maxWidth: "420px" }}
          >
            <CldVideoPlayer
              width="1620"
                      height="1080"
                      
                  
              src="https://res.cloudinary.com/dlutiw9i4/video/upload/v1731143057/VID-20241103-WA0066_k4pxhx.mp4"
            autoplay={!overlayProject[1] ? true : false }
                  ></CldVideoPlayer>
  
            <Heading>{overlayProject[0].title} </Heading>
            {overlayProject[0].tools?.map((tool) => (
              <Badge key={tool} className="me-2"> {tool}</Badge>
            ))}
  
            <ExpandableText description={overlayProject[0].description} limit={20}></ExpandableText>
                </Card>
                </Box>
          
                </Box>
                </Box>
       ) 
    }
  return (
      <Box className='absolute w-full left-0 top-0 backdrop-blur-xl z-40 '>
          <Box className='relative'>
          <Box onClick={() => setOverlay([])} className='absolute top-3 left-3 text-xl text-white rounded-full p-3 bg-black'>X</Box>

          <Box className='w-full mx-auto md:w-65%'>
          <Card
        className="p-0 mx-auto "
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <CldImage
          src="https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg"
          alt="Description of my image"
          width="300"
          height="400"
          style={{
            objectFit: "cover",

            overflow: "hidden",

            width: "100%",
            height: "150px",
          }}
        ></CldImage>

        <Heading>{overlayProject[0]?.title} </Heading>
        {overlayProject[0]?.tools?.map((tool) => (
          <Badge key={tool} className="me-2"> {tool}</Badge>
        ))}

        <ExpandableText description={overlayProject[0]?.description} limit={20}></ExpandableText>
      </Card>
              </Box>
              </Box>
          
    </Box>
  )
}

export default ProjectOverlay
