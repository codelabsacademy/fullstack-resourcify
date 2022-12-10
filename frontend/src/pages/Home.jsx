import React from "react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { RxVideo, RxFileText } from "react-icons/rx";
import { FcLike } from "react-icons/fc";

export default function Home({name}) {
  console.log("Rendering: Home");
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <h1 className="flex py-5 lg:px-20 md:px-10 mx-5 font-bold text-2xl text-gray-800">
        Welcome {name}
      </h1>
      <div className="flex overflow-x-scroll text-gray-500 hide-scroll-bar rounded-lg shadow-inner mb-6">
        <div className="flex flex-nowrap lg:ml-10 ml-2 py-2">
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            reactjs
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            javascript
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            nodejs
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            nextjs
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            reactnative
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            reactjs
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            javascript
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            nodejs
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            nextjs
          </Link>
          <Link className="badge badge-lg badge-outline shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out mr-4">
            reactnative
          </Link>
        </div>
      </div>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="1em">
          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">
                <RxVideo className=" text-gray-500 bg-white" />
                Card title!
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start my-3">
                <Link
                  to="/"
                  className="badge badge-outlin text-gray-500 border-gray-500 bg-white"
                >
                  React
                </Link>
              </div>
              <div className="card-actions grid grid-flow-col justify-items-center mx-6">
                {/* <button className="btn btn-circle btn-link hover:bg-gray-100">
                  <HiPencil className="text-gray-500" size="1.8em" />
                </button> */}
                <button className="btn btn-circle btn-link hover:bg-gray-100">
                  <FiExternalLink className="text-gray-500" size="1.8em" />
                </button>
                <div className="flex">
                  <button className="btn btn-circle btn-link hover:bg-gray-100">
                    <FcLike size="2em" />
                  </button>
                  <div className="text-xs relative -right-1 text-gray-400">
                    837
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card w-full bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title">
                <RxFileText className=" text-gray-500 bg-white" />
                Card title!
              </h2>
              <p>
                If a dog chews shoes whose shoes does he choose? If a dog chews
                shoes whose shoes does he choose?
              </p>
              <div className="card-actions justify-start my-3">
                <Link
                  to="/"
                  className="badge badge-outlin text-gray-500 border-gray-500 bg-white"
                >
                  React
                </Link>
              </div>
              <div className="card-actions grid grid-flow-col justify-items-center mx-6">
                {/* <button className="btn btn-circle btn-link hover:bg-gray-100">
                  <HiPencil className="text-gray-500" size="1.8em" />
                </button> */}
                <button className="btn btn-circle btn-link hover:bg-gray-100">
                  <FiExternalLink className="text-gray-500" size="1.8em" />
                </button>
                <div className="flex">
                  <button className="btn btn-circle btn-link hover:bg-gray-100">
                    {/* <FcLike
                        size="2em"
                      /> */}
                    <AiOutlineHeart className="text-gray-500" size="2em" />
                  </button>
                  <div className="text-xs relative -right-1 text-gray-400">
                    1.3k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
