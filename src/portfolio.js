const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bryletan.github.io/',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bryle Tan',
  role: 'computer scientist',
  description:
    'I am a recent graduate of Rutgers University, where I earned a Bachelor\'s Degree in Computer Science. During my academic journey, I have gained and developed a strong foundation in key computer science principles and technologies. My coursework has provided me with a deep understanding of data analysis, algorithms, and software development, and allowed me to apply these concepts through hands-on projects and collaborative work.',
  resume: 'https://drive.google.com/file/d/1M4ux4mHL6xWj1r9g3giI8MfGFMSXPgFk/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/bryle-tan-095b861b7/',
    github: 'https://github.com/bryletan',
  },
}

const experiences = [
  {
    title: 'IT Specialist',
    company:'Kobo Products Inc.',
    duration:'September 2024 - Present',
    responsibilities: [
      'Maintaining and developing new features on internal Microsoft Access database',
      'Transitioning data from Access to Microsoft Dynamics 365 Business Central',
      'Providing general IT support for internal organization'
    ],
    link: 'https://www.koboproductsinc.com/'
  },
  {
    title: 'Software QA Intern',
    company:'TrueFort Inc.',
    duration:'May 2023 - Aug 2023',
    responsibilities: [
      'Developed automated test scripts to analyze and compile a comprehensive list of deprecated APIs non-compliant with REST standards',
      'Built an accessible framework for REST API documentation, allowing for enhanced client accessibility and reducing API testing time',
      'Collaborated on a cross team presentation, addressing REST API challenges and offering actionable insights that informed strategic decisions'
    ],
    link: 'https://truefort.com/'
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BuyMe',
    description:
      'A full stack web application that operates as an online auction system, similar to eBay.',
    stack: ['Java', 'JavaScript', 'HTML', 'MySQL', 'CSS', 'Git'],
    sourceCode: 'https://github.com/bryletan/BuyMe',
  },
  {
    name: 'TrueFort API Repository Website',
    description:
      'A website that serves as a repository for the internal REST APIs of TrueFort Inc.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Postman'],
  },
  {
    name: 'Photo Album',
    description:
      'Mobile application that allows users to manage and organize their photos on their Android device',
    stack: ['Android', 'Java', 'Git'],
    sourceCode: 'https://github.com/bryletan/Photo-Album-Android',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'C',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Git',
  'MySQL',
  'Tomcat',
  'Vim',
  'Access',
  'VBA',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bryletan.cs@gmail.com',
}

export { header, about, experiences, projects, skills, contact }
