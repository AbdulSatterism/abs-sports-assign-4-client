const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      imgSrc: "https://i.ibb.co/Wsg3rGT/teacher1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Backend developer",
      imgSrc: "https://i.ibb.co/GWw34n7/teacher2.jpg",
    },
    {
      name: "Alice Johnson",
      role: "frontend developer",
      imgSrc: "https://i.ibb.co/sv6vT5C/cloth5.jpg",
    },
    {
      name: "Bob Brown",
      role: "SEO expert",
      imgSrc: "https://i.ibb.co/sv6vT5C/cloth5.jpg",
    },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold my-8 text-[#04211c] text-center ">
        About us
      </h2>
      <div className="grid grid-cols-1 my-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-base-100 w-full shadow-lg mx-auto">
          <div className="card-body">
            <h2 className="card-title text-[#04211c]">About Company</h2>
            <p className="items-center">
              Diam neque diam sed tincidunt lobortis facilisis massa eget
              scelerisque tincidunt amet in blandit maecenas egestas eu quam
              aenean odio urna facilisis integer tincidunt ut eu eu ultrices
              integer quisque vivamus felis leo massa maecenas in et tempus nisl
              morbi euismod iaculis pellentesque urna vulputate suspendisse eget
              sit
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-lg mx-auto">
          <div className="card-body">
            <h2 className="card-title text-[#04211c]">Our Mission</h2>
            <p className="items-center">
              Our mission is to inspire athletes and enthusiasts through
              innovative and high-quality sports products. Our vision is to be
              the most trusted and dynamic sports goods provider globally.To
              offer seamless service and build value for clients through focus
              and results. To be the first choice for optimizing and achieving
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-lg mx-auto">
          <div className="card-body">
            <h2 className="card-title text-[#04211c]">Our Vision</h2>
            <p className="items-center">
              Our mission is to inspire athletes and enthusiasts through
              innovative and high-quality sports products. Our vision is to be
              the most trusted and dynamic sports goods provider globally.To
              offer seamless service and build value for clients through focus
              and results. To be the first choice for optimizing and achieving
              operational excellence through IT enabled services. To be a
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <section className="my-8">
          <h2 className="text-3xl font-bold my-8 text-[#04211c] text-center ">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                className="card  shadow-lg"
              >
                <figure>
                  <img src={member.imgSrc} alt={member.name} />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold my-8 text-[#04211c] text-center">
            Our Store Location
          </h2>
          <iframe
            title="store-location"
            className="w-full h-64"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086434282726!2d-122.41941548468172!3d37.77492927975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808ef2b22c21%3A0x7d4c4b18c8c8b8f!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1624003985241!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
