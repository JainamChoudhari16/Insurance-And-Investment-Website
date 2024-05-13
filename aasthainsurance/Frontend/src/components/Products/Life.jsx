function Life() {
  const cardsData = [
    {
      name: "Life 1",
      image: "image1.jpg",
      company: "Company A",
    },
    {
      name: "Life 2",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 3",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 4",
      image: "image2.jpg",
      company: "Company B",

    },
    {
      name: "Life 5",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 6",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 7",
      image: "image2.jpg",
      company: "Company B",

    },
    {
      name: "Life 8",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 9",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 10",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 11",
      image: "image2.jpg",
      company: "Company B",
    },
    {
      name: "Life 12",
      image: "image2.jpg",
      company: "Company B",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center p-8">
      {/* Map through the cardsData array to render each card */}
      {cardsData.map((card, index) => (
        <div
          className="w-64 max-w-xs mx-4 my-4 bg-white shadow-lg rounded-lg overflow-hidden"
          key={index}
        >
          <img className="w-full h-auto" src={card.image} alt={card.name} />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{card.name}</h2>
            <p className="text-gray-600">{card.company}</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSePLmiQK_Mp17y8rSkbeH0YopduUKPbJ6ByvkvMzVT-z-LfvQ/viewform?embedded=true"
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Life;
