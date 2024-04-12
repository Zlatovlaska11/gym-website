import Navbar from "./navbar";

export function GetUserData() {

  return (
    AttrFrom(input.text, "What is your name", "name")
  );

}

function UserDataForm() {

}

enum input {

  text,
  num

}

function AttrFrom(inpt: input, question: String, textPlc: String) {

  let inputEl: JSX.Element = <input className="appearance-none bg-transparent border-none mt-20 w-full text-gray-700 mr-3 py-1 px-2 leading-tight flex border-blue-300 focus:outline-none placeholder:text-center" type="text" placeholder={textPlc} aria-label="Full name" />

  switch (inpt) {
    case input.text:
      if (textPlc !== null) {
        inputEl = <input className="appearance-none bg-transparent border-none mt-20 w-full text-gray-700 mr-3 py-1 px-2 leading-tight flex border-blue-300 focus:outline-none placeholder:text-center" type="text" placeholder={textPlc} aria-label="Full name" />
      }
      break;
    case input.num:
      inputEl = <input className="appearance-none bg-transparent border-none mt-20 w-full text-gray-700 mr-3 py-1 px-2 leading-tight flex border-blue-300 focus:outline-none placeholder:text-center" type="number" placeholder="weight" aria-label="Full name" />
      break;

  }
  // finsih the onSumbmit func and make the transition -- TOTAL DONKEY SHIT

  return (
    <>
      <Navbar />

      <div className="w-full h-fl flex items-center justify-center" >
        <div className="bg-primary w-1/5 h-3/5 border-xl rounded-3xl flex-col" >
          <h1 className="flex justify-center items-center mt-10">{question}</h1>

          <div className="flex justify-center items-center mx-auto" />

          <div className="w-3/5 h-3/5 mx-auto flex flex-col justify-start items-center rounded-3xl mt-20 mb-20 content-between space-y-10 dark:bg-black ">
            <form className="flex flex-col w-full h-full space-y-10 justify-evenly">
              {inputEl}
              <button type="submit" className="mx-auto w-20 h-10 bg-primary justify-end align-bottom rounded-md mt-auto text-center ">{"submit"}</button>
            </form>
          </div>
        </div>
      </div>

    </>

  );
}


export default GetUserData();
