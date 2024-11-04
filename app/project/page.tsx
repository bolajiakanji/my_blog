'use client'

import { Box } from '@radix-ui/themes'
import React, { useState } from 'react'

interface Project {
    no: number;
    category: string[];
    imageUrls: string[];
    sourceCode: string;
    link: string;
    title: string;
    description: string;
    videoUrl?: string;

}

const MyProject = () => {
    const [projects, setProject] = useState<Project[]>()
    
  return (
    <Box
      className="mt-20 px-5  z-50 absolute  w-full left-0"
      style={{ zIndex: "15" }}
    >project</Box>
  )
}

export default MyProject


const Projecs: Project[] = [
    {
        no: 1,
        category: ['frontend'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''
    },
    {
        no: 2,
        category: ['backend'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''
    },
    {
        no: 3,
        category: ['mobile-app'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''

    },
    {
        no: 4,
        category: ['fullstack'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''
    },
    {
        no: 1,
        category: ['nextjs'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''
    },
    {
        no: 1,
        category: ['frontend'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''
    },
    {
        no: 1,
        category: ['nextjs'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''
},
]