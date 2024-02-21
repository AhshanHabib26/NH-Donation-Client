import Styles from "../styles/Loader.module.css";
/* eslint-disable no-unused-vars */
export default function WinterClothesLoader() {
  const Counter = ["", "", "", "", "", "", "", ""];

  return (
    <div>
      <div className="flex items-end justify-end">
        <h1 className="w-[150px] h-[50px] bg-gradient-to-l from-[#c0c0bc] to-[#cde2e1] rounded-md"></h1>
      </div>
      <div className="grid grid-cols-4 gap-8 my-5">
        <div>
          <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
        </div>
        <div>
          <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md flex-wrap"></h1>
        </div>
      </div>
      // @ts-ignore
      {Counter.map((count, index) => (
        <div
          key={index}
          className={`${Styles.loaderContainer} ${count} flex items-center justify-between mb-3`}
        >
          <div>
            <p className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 lg:w-[500px] rounded-md"></p>
          </div>
          <div>
            <p className=" bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 w-[180px] rounded-md"></p>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
            <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
            <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
            <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
            <h1 className="bg-gradient-to-l from-[#d3d3d1] to-[#cde2e1] p-5 rounded-md"></h1>
          </div>
        </div>
      ))}
    </div>
  );
}
