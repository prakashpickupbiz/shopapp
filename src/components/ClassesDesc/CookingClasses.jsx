import React from "react";

function CookingClasses() {
  return (

    <>
      <div className=" bg-blue-50 min-h-screen">
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-blue-600">
          <div className="flex items-center text-white font-bold text-lg">
            <div className="text-3xl mr-2">🍴</div>
            Food Lovers
          </div>
          <span className=""><button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Quick Links</button></span>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col md:flex-row items-center md:justify-between p-8">
          {/* Content Section */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 leading-tight text-blue-900">
              Better taste <span className="text-blue-500">to make you better</span>
            </h1>
            <p className="text-blue-700 mb-6">
              If we all get together, we can fight against hunger. Let us take a
              promise to come together and promise ourselves to eradicate this
              evil by feeding the hungry. Warm wishes to you on World Food Day.
            </p>
            <div className="bg-blue-500 text-white p-6 rounded-full w-36 h-36 mx-auto md:mx-0 flex flex-col items-center justify-center shadow-md">
              <span className="font-bold text-lg">SALE</span>
              <h2 className="text-4xl font-bold">15%</h2>
              <p className="text-sm">ONLY WEEK</p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-6 md:mt-0 ml-8">
            <img
              src="https://png.pngtree.com/png-clipart/20230810/original/pngtree-cook-ok-gesturegourmet-food-taste-good-okay-sign-vector-picture-image_10216657.png"
              alt="Delicious Food"
              className="rounded-xl shadow-lg"
            />
          </div>
        </main>

        {/* New Section: About Us */}
        <section className="bg-white py-12 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
            <p className="text-blue-700">
              At Food Lovers, we believe in serving delicious meals that bring
              people together. Our mission is to spread joy through great food and
              contribute to a world free of hunger. Whether you're celebrating with
              loved ones or simply enjoying a quiet moment, our meals are crafted
              to make every bite memorable.
            </p>
          </div>
        </section>

        {/* New Section: Popular Dishes */}
        <section className="py-12 px-8 bg-blue-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
              Our Popular Dishes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src="https://www.allrecipes.com/thmb/id9gQiBO-Stf4FpFRMoRpMkOLHU=/160x90/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/16160-juicy-grilled-chicken-breasts-ddmfs-5594-hero-3x4-902673c819994c0191442304b40104af.jpg"
                  alt="Dish 1"
                  className="rounded-md mb-4 w-full"
                />
                <h3 className="text-lg font-bold text-blue-900">Grilled Chicken</h3>
                <p className="text-blue-700">
                  Juicy grilled chicken served with fresh veggies and herbs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcj0owhSIZF38KQA90yAo4zcVv9Z6B6TOIWw&s"
                  alt="Dish 2"
                  className="rounded-md mb-4 w-full"
                />
                <h3 className="text-lg font-bold text-blue-900">Pasta Primavera</h3>
                <p className="text-blue-700">
                  A delicious mix of pasta and fresh seasonal vegetables.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVIkXZOaz6z6BRlTrGKJkObzi2lZUamTDHg&s"
                  alt="Dish 3"
                  className="rounded-md mb-4 w-full"
                />
                <h3 className="text-lg font-bold text-blue-900">Classic Burger</h3>
                <p className="text-blue-700">
                  A classic burger with melted cheese and crispy fries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center p-6 bg-blue-600 text-white">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <i className="fab fa-facebook text-lg"></i>
            <i className="fab fa-instagram text-lg"></i>
            <i className="fab fa-twitter text-lg"></i>
          </div>
          <span className="text-sm">@youraccount</span>
        </footer>
      </div>


    </>
  );
}

export default CookingClasses;
