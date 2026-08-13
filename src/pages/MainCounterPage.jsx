import TimeUnit from "../components/TimeUnit"
// import NewTimeUnit from "../components/newTimeUnit"

function MainCounterPage(){
  return <>
    <div className="flex items-center justify-center min-h-screen text-center">
      {/* For some unknown reason anything between extrabold and base (400 - 800) shows up weirdly */}
      <div className="counter text-7xl font-extrabold" >
        <TimeUnit/>
        {/* <NewTimeUnit/> */}
      </div>
    </div>
  </>
}

export default MainCounterPage