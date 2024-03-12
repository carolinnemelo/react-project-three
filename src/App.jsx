import { useState } from 'react';
import './App.css'

const jobs = [
  {
    id: 1,
    company: "Photosnap",
    logo: "/images/photosnap.svg",
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: []
  },
  {
    id: 2,
    company: "Manage",
    logo: "/images/manage.svg",
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"]
  },
  {
    id: 3,
    company: "Account",
    logo: "/images/account.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  },
  {
    id: 4,
    company: "MyHome",
    logo: "/images/myhome.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: []
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "/images/loop-studios.svg",
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"]
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "/images/faceit.svg",
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"]
  },
  {
    id: 7,
    company: "Shortly",
    logo: "/images/shortly.svg",
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"]
  },
  {
    id: 8,
    company: "Insure",
    logo: "/images/insure.svg",
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"]
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "/images/eyecam-co.svg",
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"]
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "/images/the-air-filter-company.svg",
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"]
  }
];


function App() {

  return (
    <>
      <Header />
      <InputFilter />

      <ul>
        {jobs.map((job) => {
          return(
          <JobCard 
              company={job.company}
              logo={job.logo}
              position={job.position}
              level={job.level}
              postedAt={job.postedAt}
              contract={job.contract}
              languages={job.languages}
              tools={job.tools}
              location={job.location}
              />
            )
          })
        }
      </ul>
    </>
  )
}



function Header() {

  return (
    <header>
      <h1>Find the best job for you</h1>

    </header>
  )
}

function InputFilter() {
  const userInput ='';
  const filteredJobs = jobs.filter((job) => {
    return job.role === userInput
  })
  console.log(filteredJobs)
  return (
    <div>
      <input className='userInput' 
      
      type="text" 
      value={userInput}
      // onChange={handleInputChange}
      placeholder='Type here'

      />
      <h3>{filteredJobs}</h3>
    </div>
  )

}

function JobCard({id, company, logo, position, level, postedAt, contract, languages, tools, location}) {
  return (
    <li>
      <article className='jobCard'>
        <div className='logo'>
        <img src={logo} />
        <h3>{company}</h3>
        </div>
        <div className='content'>
        <p>{position}</p>
        <p>{location}</p>
        <p>{level}</p>
        <p>{contract}</p>
        <p>{languages}</p>
        <p>{tools}</p>
        <p>{postedAt}</p>
        </div>
      </article>
    </li>
  )
}

// function Data() {

//   const url = 'https://github.com/chasacademy-sandra-larsson/react-jobchaser/blob/main/data.js';
//   const fetchData = async () => {
//     const response = await fetch(url);
//     const data = response
//     console.log(data)
//   }
  
//   useEffect(()=>{
//     fetchData()
//   }, [])


// }

export default App

