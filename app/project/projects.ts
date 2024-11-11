
export interface Project {
    no: number;
    category: string[];
    imageUrls: string[];
    sourceCode: string;
    link: string;
    title: string;
    description: string;
    videoUrl?: string;

}


const projects: Project[] = [
    {
        no: 1,
        category: ['mobile-app'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: 'my game hub',
        description: 'this is a game discovery app'
    },
    {
        no: 2,
        category: ['frontend'],
        imageUrls: [''],
        sourceCode: '',
        link: '',
        title: '',
        description: ''
    },
    {
        no: 3,
        category: ['backend'],
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

export default projects