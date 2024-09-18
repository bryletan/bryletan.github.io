import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience'>
    <div className='experience__header'>
        <h3>{experience.title}</h3> - <h3> <a href={experience.link} target="_blank" rel="noopener noreferrer">{experience.company}</a></h3>
    </div>
    <p className='experience__duration'>{experience.duration}</p>
    <ul className='experience__responsibilities'>
      {experience.responsibilities.map((item) => (
        <li key={uniqid()}>{item}</li>
      ))}
    </ul>
  </div>
)

export default ExperienceContainer