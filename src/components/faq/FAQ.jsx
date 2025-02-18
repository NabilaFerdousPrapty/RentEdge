import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="border border-blue-900 rounded-2xl  ">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 text-primary">
            Here are some of the most common questions about Rent Edge.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none  text-primary">
                How does RentEDGE's rent-to-own feature work?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-secondary">
                Our rent-to-own option allows you to rent products with the
                possibility of ownership. A portion of your rental payments
                contributes towards the purchase price, enabling you to try the
                product before fully committing.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none  text-primary">
                Can I use items as collateral instead of cash deposits?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-secondary">
                Yes, RentEDGE offers a barter system where you can use items of
                equal value as collateral, eliminating the need for cash
                deposits. This approach provides flexibility and reduces upfront
                costs.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none  text-primary">
                What is decentralized storage, and how can I benefit from it?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-secondary">
                Decentralized storage allows you to rent out unused space to
                store bartered items. This system helps in lowering warehouse
                costs and efficiently utilizes available storage spaces within
                the RentEDGE community.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
