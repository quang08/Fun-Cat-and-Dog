import { React, useState, useRef, useEffect } from "react";

function JRReact() {
  const [imageType, setImageType] = useState();
  const [clicks, setClicks] = useState(0);
  //   const btnRef = useRef(null);

  useEffect(() => {
    let clickTimer;
    if (clicks === 1) {
      clickTimer = setTimeout(() => {
        setImageType("cat");
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      clickTimer = setTimeout(() => {
        setImageType("dog");
        setClicks(0);
      }, 250);
    }
    return () => clearTimeout(clickTimer);
  }, [clicks]);

//   const handleClick = () => {
//     setImageType("cat");
//   };

//   const handleDoubleClick = () => {
//     //btnRef.current.setAttribute("disabled", "disabled");
//     setImageType("dog");
//   };

  const handleReset = () => {
    //btnRef.current.removeAttribute("disabled");
    setImageType("");
  };

  return (
    <div className="bg-black border-2 border-white w-3/4 h-3/4 rounded-lg md:max-w-lg p-3 text-center">
      <button
        //ref={btnRef}
        onClick={() => setClicks(1)}
        onDoubleClick={() => setClicks(2)}
        className="p-2 rounded-lg bg-blue-500 hover:shadow-lg hover:shadow-gray-500 mb-5 font-bold"
      >
        <p>Click to see Cats</p>
        <p>Double click to see Dogs</p>
      </button>

      <div className="flex flex-col justify-center items-center w-full h-[84%]">
        {imageType && (
          <img
            className="rounded-lg"
            src={`https://source.unsplash.com/random/300x300/?${imageType}`}
            alt="image"
          />
        )}
      </div>

      <button
        onClick={handleReset}
        className="p-2 rounded-lg bg-blue-500 hover:shadow-lg hover:shadow-gray-500 font-bold"
      >
        Reset
      </button>
    </div>
  );
}

export default JRReact;
