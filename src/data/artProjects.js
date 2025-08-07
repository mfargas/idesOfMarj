export const artProjects = [
    {
        id: '001',
        title: 'Digital Dreams',
        description: 'Generative art exploring consciousness and technology through algorithmic patterns and digital landscapes.',
        fullDescription: `Digital Dreams is an exploration of consciousness and technology through generative art. This project uses algorithmic patterns to create digital landscapes that reflect the intersection of human thought and machine learning.

The work examines how digital technology shapes our perception of reality and consciousness. Through carefully crafted algorithms, the piece generates evolving patterns that mimic neural networks and cognitive processes.

Each viewing reveals new patterns and connections, inviting the viewer to contemplate the relationship between human consciousness and artificial intelligence. The piece serves as a meditation on the future of human-machine interaction and the evolving nature of consciousness in the digital age.`,
        category: 'Digital Art',
        year: '2024',
        medium: 'Digital / Generative',
        image: 'fairies.PNG',
        tags: ['generative', 'digital', 'consciousness'],
        dimensions: 'Variable',
        duration: 'Interactive',
        techniques: ['Algorithmic Generation', 'Digital Painting', 'Neural Networks'],
        featured: true
    },
    {
        id: '002',
        title: 'Abstract Realities',
        description: 'Exploring the boundaries between perception and reality through abstract geometric compositions.',
        fullDescription: `Abstract Realities challenges conventional perceptions of space and form through geometric abstraction. This series explores the boundaries between what we perceive and what actually exists, using geometric forms to question the nature of reality.

The work employs mathematical principles and geometric relationships to create compositions that appear both familiar and alien. Each piece in the series represents a different aspect of reality - from the microscopic to the cosmic - unified through abstract geometric language.

Through careful manipulation of form, color, and space, the pieces create optical illusions that challenge the viewer's understanding of dimension and perspective. The work invites contemplation on how our brains construct reality from visual information.`,
        category: 'Abstract',
        year: '2024',
        medium: 'Digital / Vector',
        image: 'banner.png',
        tags: ['abstract', 'geometric', 'perception'],
        dimensions: 'Variable',
        duration: 'Static',
        techniques: ['Vector Graphics', 'Geometric Design', 'Optical Illusion'],
        featured: false
    },
    {
        id: '003',
        title: 'Creative Code',
        description: 'Art created through algorithmic processes and code, merging technology with artistic expression.',
        fullDescription: `Creative Code represents the intersection of programming and artistic expression. This project demonstrates how code can be used as a medium for creative expression, producing art that is both mathematically precise and aesthetically compelling.

The work explores various programming paradigms and algorithms to generate visual art. From fractal generation to particle systems, each piece showcases different computational approaches to creativity. The project challenges the traditional separation between technical and artistic disciplines.

Through interactive elements and real-time generation, viewers can experience the creative process as it happens. The work serves as both art and education, demonstrating the potential of code as a creative medium.`,
        category: 'Generative',
        year: '2024',
        medium: 'Code / Algorithm',
        image: 'gatsby-astronaut.png',
        tags: ['algorithmic', 'code', 'technology'],
        dimensions: 'Variable',
        duration: 'Interactive',
        techniques: ['JavaScript', 'Canvas API', 'Real-time Generation'],
        featured: true
    },
    {
        id: '004',
        title: 'Portrait Studies',
        description: 'Digital portrait work exploring human expression and character through contemporary techniques.',
        fullDescription: `Portrait Studies explores human expression and character through contemporary digital techniques. This series captures the essence of individuals through innovative approaches to portraiture, blending traditional artistic principles with modern digital tools.

Each portrait goes beyond mere representation to capture the subject's inner world and personality. The work employs various digital techniques including digital painting, photo manipulation, and algorithmic enhancement to create portraits that reveal deeper truths about the human condition.

The series examines themes of identity, expression, and the human experience in the digital age. Through careful attention to detail and emotional nuance, each portrait tells a story that transcends the individual subject to speak to universal human experiences.`,
        category: 'Portrait',
        year: '2024',
        medium: 'Digital / Portrait',
        image: 'Margie-portrait.png',
        tags: ['portrait', 'digital', 'human'],
        dimensions: 'Variable',
        duration: 'Static',
        techniques: ['Digital Painting', 'Photo Manipulation', 'Character Study'],
        featured: false
    },
    {
        id: '005',
        title: 'Conceptual Narratives',
        description: 'Storytelling through visual art, creating narratives that challenge conventional perspectives.',
        fullDescription: `Conceptual Narratives uses visual art to tell stories that challenge conventional perspectives and societal norms. This series creates complex narratives through visual metaphors and symbolic imagery, inviting viewers to question their assumptions about reality.

Each piece in the series tells a story that unfolds through multiple layers of meaning. The work employs symbolism, metaphor, and allegory to create narratives that resonate on both personal and universal levels. Through careful composition and visual storytelling, the pieces create emotional and intellectual engagement.

The series explores themes of identity, society, and human relationships through innovative visual approaches. Each narrative piece invites multiple interpretations, creating a dialogue between the artist, the work, and the viewer.`,
        category: 'Conceptual',
        year: '2024',
        medium: 'Mixed Media',
        image: 'andrea-portrait.jpg',
        tags: ['conceptual', 'narrative', 'storytelling'],
        dimensions: 'Variable',
        duration: 'Static',
        techniques: ['Symbolic Imagery', 'Visual Metaphor', 'Narrative Composition'],
        featured: true
    },
    {
        id: '006',
        title: 'Experimental Forms',
        description: 'Pushing boundaries of digital art through experimental techniques and innovative approaches.',
        fullDescription: `Experimental Forms pushes the boundaries of digital art through innovative techniques and unconventional approaches. This project explores the limits of digital media and challenges traditional artistic conventions through experimental processes and methodologies.

The work employs cutting-edge digital tools and techniques, from AI-assisted generation to custom software development. Each piece represents an experiment in form, process, or concept, pushing the boundaries of what digital art can achieve. The project serves as a laboratory for artistic innovation and technical exploration.

Through risk-taking and experimentation, the series discovers new possibilities for digital expression. The work challenges viewers to expand their understanding of art and technology, creating experiences that are both intellectually stimulating and visually compelling.`,
        category: 'Experimental',
        year: '2024',
        medium: 'Digital / Experimental',
        image: 'logo-favIcon.png',
        tags: ['experimental', 'innovation', 'boundaries'],
        dimensions: 'Variable',
        duration: 'Variable',
        techniques: ['AI Generation', 'Custom Software', 'Experimental Processes'],
        featured: false
    }
]

export const categories = ['All', 'Digital Art', 'Abstract', 'Generative', 'Portrait', 'Conceptual', 'Experimental']

export const getProjectById = (id) => {
    return artProjects.find(project => project.id === id)
}

export const getFeaturedProjects = () => {
    return artProjects.filter(project => project.featured)
}

export const getProjectsByCategory = (category) => {
    if (category === 'All') return artProjects
    return artProjects.filter(project => project.category === category)
}
