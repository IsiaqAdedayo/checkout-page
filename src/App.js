import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
      setIsOpen(!isOpen);
  }

  return (
    <div className="w-screen md:w-full p-7 px-9 overflow-x-hidden relative">
      <div className="grid lg:grid-cols-2">
        <div className="hidden lg:block"></div>
        <div className="justify-between font-semibold text-2xl text-indigo-900 items-center hidden md:flex">
          <h1>TRIPS</h1>
          <h1>RECENTLY VIEWED</h1>
          <h1>BOOKINGS</h1>
          <i className="fa fa-user-circle fa-2x" style={{ color: "indigo" }}></i>
        </div>

        <i className="fa fa-bars fa-2x md:hidden absolute top-10 right-10" onClick={handleClick} style={{ color: "indigo" }}></i>
      </div>

      <div className={`${isOpen ? "flex" : "hidden"} w-screen absolute top-20 left-0 flex-col text-center font-semibold bg-indigo-100 pl-3 pt-8 pb-14 space-y-6 overflow-y-scroll overscroll-y-auto`}>
        <div className="p-5 py-2 space-y-4 font-semibold text-lg">
          <i className="fa fa-user-circle fa-4x pb-5" style={{ color: "indigo" }}></i>
          <p className="border-b border-gray-500 border-opacity-50 pb-1">TRIPS</p>
          <p className="border-b border-gray-500 border-opacity-50 pb-1">RECENTLY VIEWED</p>
          <p className="border-b border-gray-500 border-opacity-50 pb-1">BOOKINGS</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 py-10 mt-20 border-t-2 border-b-2 border-gray-300 xl:mx-11">
        <div className="space-y-6">
          <div className="space-y-2 pl-3">
            <h1 className="font-semibold text-3xl">Payment Information</h1>
            <h1 className="text-gray-400">Choose your method of payment</h1>
          </div>
          <img src="./card.png" alt="banner"/>
        </div>

        {/* </form> */}
        <div className="">
          <form>
            <div>

              <div className="grid  md:grid-cols-2 pt-8 pb-3 md:pt-0 md:pb-16">
                <div className="hidden md:block"></div>
                <div className="flex justify-between">
                  <i className="fa fa-cc-visa fa-2x" style={{ color: "navy" }}></i>
                  <i className="fa fa-cc-paypal fa-2x" style={{ color: "blue" }}></i>
                  <i className="fa fa-cc-mastercard fa-2x" style={{ color: "red" }}></i>
                  <i className="fa fa-cc-discover fa-2x" style={{ color: "orange" }}></i>
                </div>
              </div>

              
              <div className="grid grid-cols-2 space-x-4">
                <div>
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    type="number"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="5466-5584-7874-8398"
                  />
                </div>

                <div>
                  <label htmlFor="expmonth">Expiration Date</label>
                  <input
                    type="number"
                    id="expmonth"
                    name="expmonth"
                    placeholder="03/24"
                  />
                </div>
              </div>


              <div className="grid grid-cols-2 space-x-4">
                <div >
                  <label htmlFor="scode">Security code</label>
                  <input
                    type="number"
                    id="scode"
                    name="scode"
                    placeholder="420"
                  />
                </div>
                <div>
                  <label htmlFor="pcode">Postal code</label>
                  <input type="number" id="pcode" name="pcode" placeholder="10119" />
                </div>
              </div>

            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                checked="checked"
                name="sameadr"
                className="w-min p-0 mb-0 mr-2"
              />
              <h1 className="text-sm md:text-base">Use this card for next time purchase</h1>
            </div>

            <input type="submit" value="Add Card" className=" bg-blue-900 h-16 text-white text-xl rounded" />
          </form>
        </div>
        {/* </form> */}
      </div>

      <div className="py-10 border-b-2 border-gray-300 xl:mx-11 space-y-3">
        <div className="flex justify-between font-bold text-xl">
          <h1>Subtotal</h1>
          <h1>₦2,497.00</h1>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <h1>Estimated TAX</h1>
          <h1>₦119.64</h1>
        </div>
        <div className="flex justify-between font-bold text-xl">
          <h1>Promotional Code: <span className="text-gray-400">Z4KXLM9A</span></h1>
          <h1>₦-60.00</h1>
        </div>
      </div>

      <div className="py-10 xl:mx-11 flex flex-col-reverse md:flex-row justify-between items-center">
        <input type="submit" value="Complete Payment" className="bg-blue-900 h-16 text-white text-2xl rounded w-min px-9 md:px-16 " />
        <h1 className="font-extrabold text-2xl pb-7 md:pb-0">TOTAL: ₦2,556.64</h1>
      </div>

    </div>
  );
}

export default App;
