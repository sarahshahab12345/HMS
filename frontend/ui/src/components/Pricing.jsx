import React from "react";

const pricingPlans = [
  {
    id: 1,
    title: "Standard Plan",
    price: "$50",
    originalPrice: "$100",
    description:
      "Perfect for solo travelers and quick stays. Includes basic amenities such as free Wi-Fi, room service, and daily breakfast.",
    discount: "50% OFF",
  },
  {
    id: 2,
    title: "Premium Plan",
    price: "$100",
    originalPrice: "$200",
    description:
      "Ideal for couples with premium services. Enjoy additional perks such as spa access, priority check-in, and a minibar in the room.",
    discount: "50% OFF",
  },
  {
    id: 3,
    title: "Luxury Plan",
    price: "$150",
    originalPrice: "$300",
    description:
      "The ultimate luxury experience for VIP guests. This plan includes a private pool, chauffeur service, and an exclusive dinner experience.",
    discount: "50% OFF",
  },
];

const Pricing = () => {
  return (
    <section className="bg-[#F4F2ED] text-[#4A4A4A] py-16">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4 text-black">Our Plans</h2>

        {/* Centered Half-Line Below the Heading */}
        <div className="flex justify-center items-center mb-12">
          <div
            className="h-1 bg-[#B89F80]"
            style={{ width: "20%" }}
          ></div>
        </div>

        {/* Pricing Cards Layout */}
        <div className="flex flex-wrap justify-center gap-12">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white text-black rounded-lg shadow-lg w-[300px] p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Discount Badge */}
              {plan.discount && (
                <div className="absolute top-5 right-[-45px] bg-gradient-to-r from-[#ffd400] to-[#ffbc00] text-[#5d4d00] font-semibold px-4 py-2 rotate-45 transform">
                  {plan.discount}
                </div>
              )}

              {/* Plan Title */}
              <h2 className="text-3xl font-semibold mb-4">{plan.title}</h2>

              {/* Price */}
              <h3 className="text-5xl font-bold mb-6 text-[#B89F80]">
                {plan.price}{" "}
                <span className="text-lg line-through text-gray-400">
                  {plan.originalPrice}
                </span>
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-6">{plan.description}</p>

              {/* Features List */}
              <ul className="text-left mb-8 text-gray-600">
                <li className="mb-2">
                  <span className="mr-2 text-green-500 font-bold">&#10003;</span>{" "}
                  Free Wi-Fi
                </li>
                <li className="mb-2">
                  <span className="mr-2 text-green-500 font-bold">&#10003;</span>{" "}
                  Room Service
                </li>
                <li className="mb-2">
                  <span className="mr-2 text-green-500 font-bold">&#10003;</span>{" "}
                  Daily Breakfast
                </li>
              </ul>

              {/* Button */}
              <button className="bg-[#B89F80] text-white py-2 px-6 rounded-lg shadow-md hover:bg-[#a37a5c] transition-all">
                Choose this plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
