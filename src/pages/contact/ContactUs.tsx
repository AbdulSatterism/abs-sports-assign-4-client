const ContactUs = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl mb-8 font-bold text-center text-[#04211c]">
        Contact
      </h2>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gap-4">
            <h3 className="text-2xl font-semibold text-[#04211c] uppercase">
              Get in Touch
            </h3>
            <form className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#04211c]">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#04211c]">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#04211c]">
                  Message
                </label>
                <textarea className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
              </div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-2 px-4 border shadow-sm text-xl rounded-md text-white bg-[#04211c]"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-[#04211c] uppercase">
                Contact Information
              </h3>
              <p className="mt-4 text-[#04211c]">
                Feel free to reach out to us through any of the following
                methods.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-[#04211c]">
                Company Location
              </h4>
              <p className="text-gray-600">
                Mirpur-10,Dhaka
                <br />
                Bangladesh
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-[#04211c]">Email</h4>
              <p className="text-gray-600">abdulsatter.ism@gmail.com</p>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-[#04211c]">Mobile</h4>
              <p className="text-gray-600">(+880)- 1710426245</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
