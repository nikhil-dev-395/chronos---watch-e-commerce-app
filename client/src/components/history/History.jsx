import React from "react";

const History = () => {
  const history = [
    {
      id: 1,
      creator:
        "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      watchImage:
        "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      watchImageOnUsing:
        "https://plus.unsplash.com/premium_photo-1669904021350-c59c580086e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNofGVufDB8fDB8fHww",
    },
  ];

  return (
    <>
      <section>
        <div className="flex md:justify-between flex-wrap md:flex-nowrap  py-9 gap-4">
          {/* creator or owner or a person who is responsible for developing this watch */}
          <div className="mx-auto">
            <img
              src={history[0].creator}
              alt="creator"
              className="md:w-[30vw] w-72 h-60   md:h-[50vh] object-cover rounded-lg"
            />
          </div>

          {/* watch */}

          <div className="mx-auto">
            <img
              src={history[0].watchImage}
              alt="creator"
              className="md:w-[30vw]  md:h-[50vh]  w-72 h-60  object-cover rounded-lg"
            />
          </div>

          {/* watch on use */}

          <div className="mx-auto">
            <img
              src={history[0].watchImageOnUsing}
              alt="creator"
              className="md:w-[30vw]  md:h-[50vh]  w-72 h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
