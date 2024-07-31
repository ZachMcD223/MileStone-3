import React from "react";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
            Welcome to Aztec Chicken
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
          <div
            data-aos="fade-right"
            className="bg-cover bg-center p-4 md:p-8 rounded-lg flex flex-col justify-center"
            style={{
              backgroundColor: "#b30000",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
              height: '90vh',
            }}
          >
            <section>
              <h2 className="text-2xl md:text-5xl font-semibold text-center mb-4 md:mb-8">
                About Us
              </h2>
              <p className="text-lg md:text-xl text-center max-w-full md:max-w-4xl mx-auto mb-4 md:mb-8">
                Established in 2024, Aztec Chicken has quickly become a
                favorite dining destination for both locals and visitors. Our
                passion for food is reflected in every dish we serve. We believe
                that great food starts with the freshest ingredients and a lot
                of love. Our menu is a celebration of flavors, featuring a
                fusion of traditional recipes with a modern twist.
              </p>
              <p className="text-lg md:text-xl text-center max-w-full md:max-w-4xl mx-auto mb-4 md:mb-8">
                Our chefs are dedicated to culinary excellence, ensuring that
                every dish not only tastes amazing but is also a visual delight.
                We take pride in our warm and welcoming atmosphere, whether it
                is dine in OR takeout. Our staff is committed to providing
                exceptional service, making sure that every meal is a memorable
                one.
              </p>
              <p className="text-lg md:text-xl text-center max-w-full md:max-w-4xl mx-auto">
                We believe in sustainability and are committed to sourcing our
                ingredients responsibly. We work with local farmers and
                suppliers to bring the best produce to your table, ensuring that
                our dishes are not only delicious but also environmentally
                friendly. Join us and experience the magic of great food,
                wonderful ambiance, and impeccable service. Welcome to our
                restaurant, where every meal is a celebration.
              </p>
            </section>
          </div>
          <div
            data-aos="fade-left"
            className="bg-cover bg-center shadow-lg rounded-lg"
            style={{ 
              backgroundImage: "url(/images/Homescreenchicken.jpg)",
              backgroundColor: "#FFD43B",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
              height: '90vh',
            }}
          ></div>
        </div>
      </section>
            
      <section className="my-16 md:my-24 p-4 md:p-8 rounded-lg bg-gray-100">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4 md:mb-8">Enjoy</h2>
        <p className="text-lg md:text-xl text-center max-w-full md:max-w-3xl mx-auto">
          Our locations in both California and Texas offer the best chicken you
          will ever have! Enjoy our menu through a dine in experience or for
          takeout.
        </p>
      </section>

      <section className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div
          data-aos="fade-right"
          className="bg-cover bg-center shadow-lg rounded-lg"
          style={{ 
            backgroundImage: "url(/images/testbackground.png)",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            height: '50vh',
          }}
        ></div>
        <div
          data-aos="fade-left"
          className="bg-cover bg-center shadow-lg rounded-lg"
          style={{ 
            backgroundImage: "url(/images/testbackground2.png)",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            height: '50vh',
          }}
        ></div>
      </section>

      <section className="my-8 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div
          data-aos="fade-right"
          className="bg-cover bg-center shadow-lg rounded-lg"
          style={{ 
            backgroundImage: "url(/images/testbackground4.png)",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            height: '50vh',
          }}
        ></div>
        <div
          data-aos="fade-left"
          className="bg-cover bg-center shadow-lg rounded-lg"
          style={{ 
            backgroundImage: "url(/images/testbackground3.png)",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
            height: '50vh',
          }}
        ></div>
      </section>
    </div>
  );
};

export default Home;
