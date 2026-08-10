function MainCounterPage(){
  return <>
    <div className="flex items-center justify-center min-h-screen text-center">
      {/* For some unknown reason anything between extrabold and base (400 - 800) shows up weirdly */}
      <div className="counter text-7xl font-extrabold" >
        <h1>00:00:00:00</h1>
        <h1>I am testing the font</h1>
      </div>
    </div>
  </>
}

export default MainCounterPage