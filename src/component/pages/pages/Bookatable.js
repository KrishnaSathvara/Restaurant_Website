import React, { useState } from "react";
import Footer from "../../Footer/Footer";

function BookaTable() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here}
  }
  

  return(
    <>
    <div className="flex flex-col  items-center justify-center min-h-screen py-2">
      <form className="bg-slate-800 rounded-lg shadow-md p-8 mx-auto w-full md:w-1/2 lg:w-1/3"
        onSubmit={handleSubmit}
      >
        <h1 className=" text-amber-500 font-pacifico font-medium">Reservation</h1>
        <h2 className="text-2xl text-white font-bold mb-4">Book a Table Online</h2>
        <div className="mb-4">
          <label
            className="block text-white font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block  text-white font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-white font-bold mb-2" htmlFor="date">
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-white font-bold mb-2" htmlFor="time">
            Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block  text-white font-bold mb-2"
            htmlFor="people"
          >
            Number of People
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="people"
            type="number"
            min="1"
            max="10"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            />
            
          </div>
          <button className="bg-amber-500 w-full text-white py-2 px-4">BOOK A TABLE</button>
          </form>
          </div>
          <Footer/>
          </>
          )
        };
export default BookaTable;