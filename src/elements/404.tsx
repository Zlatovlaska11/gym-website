import Navbar from "./navbar";

function FourOfour() {


  return (
    <>
      <Navbar />
      <div className="h-fl bg-primary mx-auto mt-20 ml-20 mr-20 rounded-xl flex items-center justify-center ">
        <h1 className="flex self-center flex-wrap justify-center h-5/6 w-5/6 text-5xl">{"404 page not found"}</h1>
      </div>
    </>

  )

}


export default FourOfour;
