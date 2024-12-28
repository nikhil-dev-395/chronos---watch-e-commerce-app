import { Search01Icon, Search02Icon } from "hugeicons-react";
import Watch from "../../components/watch/Watch";
const WatchPage = () => {
  // Array of watches
  const watches = [
    {
      image: "/Images/watch.png",
      limited: 15,
      model: "CH-6725S-BKGO",
      name: "flying grand regulator skeleton cowboy",
      price: 100,
    },
    {
      image: "/Images/watch.png",
      limited: 10,
      model: "CH-4825L-SKWI",
      name: "classic regulator moonphase silver",
      price: 100,
    },
    {
      image: "/Images/watch.png",
      limited: 20,
      model: "CH-9127M-BRBL",
      name: "modern regulator titanium black",
      price: 100,
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
      price: 100,
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
      price: 100,
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
      price: 100,
    },
    {
      image: "/Images/watch.png",
      limited: 5,
      model: "CH-8300F-RGLD",
      name: "luxury grand regulator rose gold",
      price: 100,
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
      {/*
      * filtering section are avail here...
      * add what filtering you want to add here ..

      filtering option :- size , dial , company name
      */}
      <div className="bg-slate-400 px-3 py-3 flex  ">
        <div className="bg-red-400 inline-block rounded-full px-3 py-3 ">
          <Search01Icon color="blue" />
        </div>
      </div>

      <div className="w-full flex  flex-wrap py-5 max-w-[85%] gap-9 mx-auto ">
        {watches.map((watch, index) => (
          <Watch
            key={index}
            image={watch.image}
            limited={watch.limited}
            model={watch.model}
            name={watch.name}
            price={watch.price}
          />
        ))}
      </div>
    </section>
  );
};

export default WatchPage;
