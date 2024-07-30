import React from "react";
import "aos/dist/aos.css";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="h-screen flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 mt-10">
            Welcome to Aztec Chicken
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div
            data-aos="fade-right"
            className="h-[1100px] bg-cover bg-center text-3xl p-8 rounded-lg"
            style={{
              backgroundColor: "#b30000",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <section className="">
              <h2 className="text-4xl font-semibold text-center mb-8">
                About Us
              </h2>
              <p className="text-3xl text-center max-w-5xl mx-auto mb-8">
                Established in 2024, Aztec Chicken has quickly become a
                favorite dining destination for both locals and visitors. Our
                passion for food is reflected in every dish we serve. We believe
                that great food starts with the freshest ingredients and a lot
                of love. Our menu is a celebration of flavors, featuring a
                fusion of traditional recipes with a modern twist.
              </p>
              <p className="text-3xl text-center max-w-5xl mx-auto mb-8">
                Our chefs are dedicated to culinary excellence, ensuring that
                every dish not only tastes amazing but is also a visual delight.
                We take pride in our warm and welcoming atmosphere, whether it
                is dine in OR takeout. Our staff is committed to providing
                exceptional service, making sure that every meal is a memorable
                one.
              </p>
              <p className="text-3xl text-center max-w-5xl mx-auto">
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
            className="h-[1100px] bg-cover bg-center shadow-lg rounded-lg"
            style={{ backgroundImage: "url(/images/Homescreenchicken.jpg)",
                backgroundColor: "#FFD43B",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
             }}
          ></div>
        </div>
      </section>

      <section className="my-16 p-8 rounded-lg bg-white">
        <h2 className="text-5xl font-semibold text-center mb-8">Enjoy</h2>
        <p className="text-3xl text-center max-w-3xl mx-auto">
          Our locations in both California and Texas offer the best chicken you
          will ever have! Enjoy our menu through a dine in experience or for
          takeout.
        </p>
      </section>

      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          data-aos="fade-right"
          className="h-96 bg-cover bg-center shadow-lg rounded-lg"
          style={{ backgroundImage: "url(/images/testbackground.png)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
           }}
        ></div>
        <div
          data-aos="fade-left"
          className="h-96 bg-cover bg-center shadow-lg rounded-lg"
          style={{ backgroundImage: "url(/images/testbackground2.png)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
           }}
        ></div>
      </section>

      <section className="my-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          data-aos="fade-right"
          className="h-96 bg-cover bg-center shadow-lg rounded-lg"
          style={{ backgroundImage: "url(/images/testbackground4.png)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
           }}
        ></div>
        <div
          data-aos="fade-left"
          className="h-96 bg-cover bg-center shadow-lg rounded-lg"
          style={{ backgroundImage: "url(/images/testbackground3.png)",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
           }}
        ></div>
      </section>
    </div>
  );
};

export default Home;
