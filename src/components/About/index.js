import photo from '../../assets/images/alex-face.png';

function About() {
  return (
    <section className="mx-2 mt-10 mb-24 md:ml-24 md:mr-48 lg:ml-32 lg:mr-96">
      <div className="flex items-center gap-6 md:gap-8 lg:gap-10 mb-10 ml-2 md:ml-24 lg:mb-20 lg:mt-20">
        <h2 className="text-6xl tracking-wide text-tertiary">About Me</h2>
        <div className="w-32 lg:w-36 bg-primary p-1 rounded-full shadow-lg">
          <img src={photo} alt="Alex Glaubitz" />
        </div>
      </div>
      <div className="leading-7 text-lg text-tertiary">
        <p className="pb-5">
          I&apos;m an inquisitive and passionate full stack web developer who brings experience with JavaScript/TypeScript, 
          the MERN and SERN stacks, and Git. After graduating the UNC-Chapel Hill coding boot camp certificate program in
          August of this year, I now work as a web developer with a startup company. I&apos;m looking for growth 
          opportunities to try new technologies and further my technical skill set in a team or solo environment. 
          My background as a classical musician has helped me carry forth a customer focused and detail-oriented approach, 
          and utilize this to create gratifying experiences for users and team members.
          {/* I began pursuing development in 2020 after performing as a classical cellist 
          for over twenty years. My introduction to development was in taking Python, JavaScript, C, C#, 
          and code design courses both online and at a local community college. My first major project was 
          creating a convolutional neural network in Python that predicts steering angles for cars using road 
          images as the input. I was encouraged by a senior engineering specialist at Aerospace to read an 
          autonomous driving car article and attempt the project for myself. This proved to be equal parts 
          challenging and exciting. After completing the first version of my neural network project, I was 
          convinced I wanted to be involved in development. */}
        </p>
        {/* <p>
          I am now a graduate of the Full Stack Flex Coding Boot Camp at the University of North Carolina, 
          Chapel Hill. I have completed multiple personal projects as well as three group projects, 
          and continue to find the process of learning and refining my skills to be fulfilling and enjoyable. 
          Starting August 7th, I&apos;ll be working as a contract web developer for a startup company in stealth mode. 
          I fell in love with the technical study required in pursuing classical music, and bring that focus to 
          my work as a developer.
        </p> */}
      </div>
    </section>
  )
}

export default About;
