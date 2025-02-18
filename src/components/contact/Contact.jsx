import React from "react";

const Contact = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] shadow-md p-[40px] rounded-xl">
      {/* Form area */}
      <form className="w-full">
        <div className="text-gray-800">
          <h1 className="text-[2rem] font-[600] leading-[35px]">
            Get in <span className="text-blue-950">touch</span>
          </h1>
          <p className="text-[0.9rem] mt-2 mb-8">
            Couldn't find what you were looking for? Contact us for more
            information.
          </p>
        </div>

        <div className="flex sm:flex-row flex-col items-center gap-[20px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <input
              type="text"
              placeholder="Your name"
              className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-800 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <input
              type="email"
              placeholder="Email address"
              className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-800 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] w-full mt-[20px]">
          <textarea
            placeholder="Write message"
            className="peer min-h-[200px] border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-800 transition-colors duration-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="py-2.5 px-6 bg-blue-950 text-white rounded-md text-[1rem] mt-[10px] w-full"
        >
          Submit
        </button>
      </form>

      {/* Map area */}
      <div className="h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902877040123!2d88.6011363154313!3d24.36358838428464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef0e1a0b0e0b%3A0x4b8e8e8e8e8e8e8e!2sRajshahi%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-md"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
