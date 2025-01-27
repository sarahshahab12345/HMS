import React from "react";

const activities = [
  {
    id: 1,
    title: "Indoor Games",
    description: "Enjoy a variety of indoor games, from table tennis to board games.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWEG3OgyH8wttFALGwTRhMOpMICEDss-I6tA&s",
  },
  {
    id: 2,
    title: "Pool",
    description: "Relax and have fun with a friendly game of pool.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/49/ab/ea/swimming-pool.jpg?w=700&h=-1&s=1",
  },
  {
    id: 3,
    title: "Snooker",
    description: "Test your skills with snooker in our well-maintained halls.",
    image:
      "https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3338/x_0,y_263,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_500,f_auto,c_fit/lotus-eco-beach-resort-murud-beach-dapoli-district-ratnagiri/Game-_1_qvzy2t",
  },
  {
    id: 4,
    title: "Club",
    description: "Dance the night away and enjoy the vibrant atmosphere in our club.",
    image:
      "https://media.cntraveler.com/photos/53db00d06dec627b14a120af/16:9/w_2560%2Cc_limit/doubletree-arctic-club-hotel-seattle-downtown-seattle-washington-110683-2.jpg",
  },
  {
    id: 5,
    title: "Transport",
    description: "Convenient transportation services for all your travel needs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7KCI254dj1cikbdoHJD8_uAef92QSyO9tg&s",
  },
  {
    id: 6,
    title: "Luggage Storage",
    description: "Secure luggage storage facilities for your peace of mind.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxGEeBhWW7z5Ebb1M5uxH32eS45uGA4MrG8g&s",
  },
];

const Activities = () => {
  return (
    <section className="bg-[#F4F2ED] text-[#4A4A4A] py-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-black">Activities</h2>

        {/* Half-line under heading */}
        <div className="relative mb-6 flex justify-center">
          <div
            className="h-1 bg-[#B89F80]"
            style={{ width: "20%" }}
          ></div>
        </div>

        {/* Activities Grid */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white border border-[#E0DED8] rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 w-80"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-[#8E7F70]">{activity.title}</h3>
                <p className="text-[#4A4A4A] mb-6">{activity.description}</p>
                <button className="px-4 py-2 bg-[#B89F80] text-white rounded-lg shadow-md hover:bg-[#A6846E] focus:outline-none focus:ring-2 focus:ring-[#B89F80] focus:ring-opacity-50">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
