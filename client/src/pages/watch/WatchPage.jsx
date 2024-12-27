import Watch from "../../components/watch/Watch";
const WatchPage = () => {
  // Array of watches
  const watches = [
    {
      image: "/Images/watch.png",
      limited: 15,
      model: "CH-6725S-BKGO",
      name: "flying grand regulator skeleton cowboy",
    },
    {
      image: "/Images/watch.png",
      limited: 10,
      model: "CH-4825L-SKWI",
      name: "classic regulator moonphase silver",
    },
    {
      image: "/Images/watch.png",
      limited: 20,
      model: "CH-9127M-BRBL",
      name: "modern regulator titanium black",
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
    },
  ];

  return (
    <section className="">
      <div className="w-full flex  flex-wrap py-5 max-w-[85%] gap-9 mx-auto ">
        {watches.map((watch, index) => (
          <Watch
            key={index}
            image={watch.image}
            limited={watch.limited}
            model={watch.model}
            name={watch.name}
          />
        ))}
      </div>
    </section>
  );
};

export default WatchPage;