const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://bryletan.github.io/',
  title: 'BT.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Bryle Tan',
  role: 'Computer Scientist',
  description:
    'Fourth-year computer science student at Rutgers University with a passion for problem-solving and technology. Throughout my studies, I have gained a strong foundation in computer science concepts and technologies, including data structures, algorithms, programming languages, and software engineering.',
  resume: 'https://drive.google.com/file/d/1M4ux4mHL6xWj1r9g3giI8MfGFMSXPgFk/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/bryle-tan-095b861b7/',
    github: 'https://github.com/bryletan',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'BuyMe',
    description:
      'A full stack web application that operates as an online auction system, similar to eBay.',
    stack: ['Java', 'JavaScript', 'HTML', 'MySQL', 'CSS', 'Git'],
    sourceCode: 'https://github.com/jamescodestuff/ebayClone',
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
  'JDBC',
  'Tomcat',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bryletan.cs@gmail.com',
}

export { header, about, projects, skills, contact }
