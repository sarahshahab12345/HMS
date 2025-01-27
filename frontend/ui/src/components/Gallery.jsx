import React from "react";

// Dummy gallery images
const galleryItems = [
  { id: 1, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYlqCpgU5lNxFf32iDMXytcvkpAqnp_i98A&s", text: "Beautiful Room" },
  { id: 2, image: "https://www.marthastewart.com/thmb/9Pa_KJYx2q7iHe8xE1VKe2MGKwo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ms-cozy-living-room-ideas-heidi-harris-d20b6776355843cea943bafdd6a94f44.jpg", text: "Cozy Lounge" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjOWKAwgL8cATXN99UxseKvgzgnHpjOBcVQ&s", text: "Luxury Suite" },
  { id: 4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6bFLZdRhZBwGE3h1517aX-Hv_QodrJh-3g&s", text: "Outdoor Pool" },
  { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytS74c6k_CSdGwSMGMv6wo3Qca1Jn82xE2w&s", text: "Fine Dining" },
  { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9fL_VjoIcBBQA-bgvSz_IfNfMOdXQNmyEEg&s", text: "Spa & Wellness" },
  { id: 7, image: "https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/84391c8c-f6a3-415a-988e-ff0534ace4fc/ovation+2.jpg", text: "Event Space" },
  { id: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUKbfeuHfvwapIc5jSgPRGRBLoH84KxgPBg&s", text: "Bar & Lounge" }
];

const Gallery = () => {
  return (
    <section className="bg-[#F4F2ED] text-[#4A4A4A] py-16">
      <div className="container mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>

        {/* Centered Half-Line Below the Heading */}
        <div className="flex justify-center items-center mb-12">
          <div
            className="h-1 bg-[#B89F80]"
            style={{ width: "20%" }}
          ></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={`Gallery Image ${item.id}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay with Text */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold">
                  {item.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
