import React from "react";
import { MdCarRental } from "react-icons/md";
const Features = () => {
  return (
    <div>
      <div className="text-center my-2  ">
        <h1 className="lg:text-5xl text-primary my-5 md:text-3xl text-2xl font-play">
          The
          <span className="text-blue-950 font-bold pacifico-regular">
            {" "}
            Best{" "}
          </span>
          Features of Rent Edge
        </h1>
        <p className="lg:text-lg md:text-base text-primary text-sm">
          RentEDGE is a decentralized platform that connects people who want to
          rent out items with those who need them.
        </p>
      </div>
      <section className="p-4 rounded-2xl border-[8px] border-indigo-900 my-3">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2">
              <div>
                <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                  Why Choose RentEDGE?
                </h1>
                <div className="mt-2">
                  <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                  <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                  <MdCarRental className="text-xl" />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold capitalize">
                    Affordable Rentals
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Access high-quality products without high upfront costs,
                    reducing financial strain.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                  <MdCarRental className="text-xl" />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold capitalize">
                    Barter for Rentals
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Use items of equal value as collateral instead of paying
                    cash deposits.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                  <MdCarRental className="text-xl" />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold capitalize">
                    Rent-to-Own
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Try before you buy—rental fees contribute to the purchase
                    price.
                  </p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4">
                  <MdCarRental className="text-xl" />
                </span>
                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-xl font-semibold capitalize">
                    Decentralized Storage
                  </h1>
                  <p className="mt-3 text-gray-500">
                    Rent out unused space to store bartered items, lowering
                    warehouse costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full border-4 border-dotted border-blue-950"
                src="https://i.ibb.co.com/DDwqBnFH/pngtree-yard-sign-vector-sale-rent-sold-design-icon-png-image-5330833-removebg-preview.png"
                alt="RentEDGE Platform"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
