import React from "react";

const Account = () => {
  return (
    <div>
      <img
        className="w-full h-[450px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/82215b4e-5428-4a9d-8c4b-383b872250d4/BD-en-20221206-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt=""
      />
      <div className="absolute w-full h-[500px] top-0 bg-black/70"></div>
      <h1 className="text-white absolute top-[18%] p-6 text-6xl font-bold">
        My Movies
      </h1>
    </div>
  );
};

export default Account;
