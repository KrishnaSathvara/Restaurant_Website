import React from "react";
import Footer from "../../Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="p-8">
        <div className="p-8">
          <p className="text-amber-500 text-center font-pacifico">____Contact us____</p>
          <h1 className="text-3xl text-slate-800 font-bold text-center">
            Contact For Any Query
          </h1>
        </div>
        <div className="grid grid-cols-3 px-16">
          <div className="py-4">
            <p className="text-amber-500 font-pacifico">Booking____</p>
            <span>book@example.com</span>
          </div>
          <div>
            <p className="text-amber-500 font-pacifico">General____</p>
            <span>info@example.com</span>
          </div>
          <div>
            <p className="text-amber-500 font-pacifico">Technical____</p>
            <span>tech@example.com</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 px-16 ">
          <div className="">
            <iframe
              className="w-full h-[330px]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58748.140603199536!2d72.55818239999999!3d23.0326272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683262523424!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <form>
            <div className="grid">
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <input
                    type="text"
                    id="name"
                    className="border-2 p-4 w-full"
                    placeholder="Your Name"
                  />
                </div>
             
                <div className="">
                  <input
                    type="email"
                    id="email"
                    className="border-2  p-4 w-full"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <br />

              <div className="">
                <input
                  type="text"
                  id="subject"
                  className="border-2  p-4 w-full"
                  placeholder="Subject"
                />
              </div>
              <br />

              <div className="">
                <textarea
                  className="border-2  p-4 w-full"
                  placeholder="message"
                  id="message"
                ></textarea>
              </div>
              <br />

              <div className="">
                <button
                  className="border-2  p-3 w-full bg-amber-500"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
