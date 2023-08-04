import { Link } from "react-router-dom";

 

const Enrol = () => {
    return (
        <div>
        
<div className="bg-tf bg-yellow-700 py-4 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"  >
        First Name
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"/>
      <p className="text-red text-xs italic">Please fill out this field.</p>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"  >
        Last Name
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-6">
    <div className="md:w-full px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"  >
        Password
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************"/>
      <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  <div className="-mx-3 md:flex mb-2">
    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"  >
        City
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"  >
        State
      </label>
      <div className="relative">
        <select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
          <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"  >
        Zip
      </label>
      <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div>
  
</div>
            
<body className="flex items-center justify-center mt-6    min-h-screen  bg-gray-500 text-gray-800 p-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2   gap-8 w-full max-w-screen-lg">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-medium">Payment Method</h2>
            <div className=" bg-df bg-violet-400 rounded mt-4 shadow-lg">
              <div className="flex items-center px-8 py-5">
                <input
                  className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100"
                  type="radio"
                />
                <label className="text-sm font-medium ml-4">PayPal</label>
              </div>
              <div className="border-t">
                <div className="flex items-center px-8 py-5">
                  <input
                    className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600"
                    type="radio"
                  />
                  <label className="text-sm font-medium ml-4">
                    Credit Card
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                  <div className="col-span-2">
                    <label className="text-xs font-semibold">Card number</label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="">
                    <label className="text-xs font-semibold">Expiry Date</label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="">
                    <label className="text-xs font-semibold">CVC/CVV</label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="password"
                      placeholder="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium">Purchase Summary</h2>
            <div className=" rounded mt-4 bg-amber-100 shadow-lg py-6">
              <div className="px-8">
                <div className="flex items-end">
                  <select
                    className="text-sm font-medium focus:outline-none -ml-1"
                    name=""
                    id=""
                  >
                    <option value="">Product (Billed Monthly)</option>
                    <option value="">Product (Billed Annually)</option>
                  </select>
                  <span className="text-sm ml-auto font-semibold">$20</span>
                  <span className="text-xs text-gray-500 mb-px">/mo</span>
                </div>
                <span className="text-xs text-gray-500 mt-2">
                  Save 20% with annual billing
                </span>
              </div>
              <div className="px-8 mt-4">
                <div className="flex items-end justify-between">
                  <span className="text-sm font-semibold">Tax</span>
                  <span className="text-sm text-gray-500 mb-px">10%</span>
                </div>
              </div>
              <div className="px-8 mt-4 border-t pt-4">
                <div className="flex items-end justify-between">
                  <span className="font-semibold">Today you pay (AUD)</span>
                  <span className="font-semibold">$0</span>
                </div>
                <span className="text-xs text-gray-500 mt-2">
                  After 1 month free: $22/mo.
                </span>
              </div>
              <div className="flex items-center px-8 mt-8">
                <input id="termsConditions" type="checkbox" />
                <label className="text-xs text-gray-500 ml-2">
                  I agree to the terms and conditions.
                </label>
              </div>
             
            </div>
          </div>
        </div>
      </body>
      {/* card  */}
    

   

      <div>
        {" "}
        <h1 className="py-6 text-3xl text-gray-700 font bold items-center text-center">
          Tab Section
        </h1>
        <div className="sm:hidden ">
          <label className="sr-only">Select your country</label>
          <select
            id="tabs"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Profile</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <ul className="hidden text-sm font-medium py-8 text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <li className="w-full">
            <Link
              to="/login"
              className="inline-block w-full p-4 text-gray-900 bg-yellow-500 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
               Login
            </Link>
          </li>
          <li className="w-full ">
            <Link
              to="/class"
              className="inline-block w-full p-4 bg-blue-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
               Classes 
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/ins"
              className="inline-block w-full p-4 bg-red-500 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
               Instructor
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/Home"
              className="inline-block w-full p-4  bg-purple-500 rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
             Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
        
    );
};

export default Enrol;