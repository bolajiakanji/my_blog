export interface Project {
    no: number;
    category: string[] | string;
    imageUrls: string[];
    sourceCode: string;
    link: string;
    title: string;
    description: string;
    videoUrl?: string;
    tools: string[]

}

const projects: Project[] = [
    {
        no: 1,
        category: 'mobile-app',
        imageUrls: [
            'https://res.cloudinary.com/dlutiw9i4/image/upload/v1730347305/IMG-20241018-WA0206_iyyeye.jpg'
        ],
        sourceCode: '',
        link: '',
        title: 'my game hub',
        description: 'this is a game discovery app ok',
        tools: [
            'react native',
            'expo'
        ],
        videoUrl: 'https://res.cloudinary.com/dlutiw9i4/video/upload/v1731143057/VID-20241103-WA0066_k4pxhx.mp4'
    },
    {
        no: 2,
        category: ['frontend'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: '',
        tools: [
            'React',
            'Chakra ui'
        ]

    },
    {
        no: 3,
        category: ['backend'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: '',
        tools: [
            'express.js', 'node', 
            'expo'
        ]


    },
    {
        no: 4,
        category: ['fullstack'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: '',
        tools: [
            'react native',
            'expo'
        ]

    },
    {
        no: 5,
        category: ['nextjs'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: '',
        tools: [
            'react native',
            'expo'
        ]

    },
    {
        no: 6,
        category: ['frontend'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: '',
        tools: [
            'react native',
            'expo'
        ]

    },
    {
        no: 7,
        category: ['nextjs'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: '',
        tools: [
            'react native',
            'expo'
        ]

},
]

export default projects