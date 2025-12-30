import { useRef } from "react"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Career from "./components/Career"
import Education from "./components/Education"
import Technical from "./components/Technical"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Skills from "./components/Skills"

function App() {
  const technicalRef = useRef(null)
  const careerRef = useRef(null)
  const contactRef = useRef(null)
  const certificationsRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)

  return (
    <div className="min-h-screen bg-blue-100">
      <Header
        technicalRef={technicalRef}
        careerRef={careerRef}
        contactRef={contactRef}
        certificationsRef={certificationsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
      />
      <Profile />

      <div ref={technicalRef}><Technical /></div>
      <div ref={careerRef}><Career /></div>
      <Education />
      <div ref={experienceRef}><Experience /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={certificationsRef}><Certifications /></div>
      <Skills />
      <div ref={contactRef}><Contact /></div>
    </div>
  )
}

export default App
