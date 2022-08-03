import React from "react";

function Home({linkSelected, setLinkSelected}) {
  return (
    <div className="flex justify-center items-center h-96 bg-transparent">
      <div className="bg-quaternary p-10 mt-8 rounded h-fit">
        <h2 className="text-xl">Hello! I'm Alex Glaubitz</h2>
        <p>
          This page is underway but please feel free to check out the rest of my portfolio!
        </p>
      </div>
    </div>
  )
}

export default Home;
