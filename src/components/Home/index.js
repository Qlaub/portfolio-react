function Home() {
  return (
    <div className="flex justify-center items-center h-96 bg-transparent">
      <div className="bg-quaternary p-10 mt-8 rounded-3xl h-fit flex flex-col items-center shadow-2xl border border-secondary">
        <h2 className="text-3xl text-zinc-900">Hello! I&apos;m Alex Glaubitz.</h2>
        <h3 className="text-xl pb-4 text-zinc-600">I build web applications. </h3>
        <p className="text-lg text-zinc-800 max-w-xl border-t border-primary pt-4">
          I&apos;m a web developer with a passion for details. I find joy in simple yet effective solutions and 
          strive to bring out the best in myself and those around me. My background and longevity as a concertizing 
          cellist for over 20 years has fostered a holistic approach in my pursuit of achievement.
        </p>
      </div>
    </div>
  )
}

export default Home;
