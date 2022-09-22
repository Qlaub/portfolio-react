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
        </p>
      </div>
    </section>
  )
}

export default About;
