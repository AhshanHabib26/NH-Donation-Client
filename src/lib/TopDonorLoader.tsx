import Styles from "../styles/Loader.module.css";

export default function TopDonorLoader() {
  const Counter = ["", "", "", ""];

  return (
    <div className={`${Styles.loaderContainer} mt-5`}>
      <div className=" max-w-6xl mx-5 lg:mx-auto">
        <h1 className="w-[300px] h-[40px] bg-gray-300 mx-auto mb-5"></h1>
        <div>
          <div className="border border-gray-100 p-1 flex items-center justify-between">
            <h1 className="w-[120px] h-[35px] bg-gray-300"></h1>
            <h1 className="w-[120px] h-[35px] bg-gray-300"></h1>
            <h1 className="w-[120px] h-[35px] bg-gray-300"></h1>
          </div>
          {Counter.map((count, index) => (
            <div
              key={index}
              className={` ${count} border border-gray-100 p-1 flex items-center justify-between my-2`}
            >
              <h1 className="w-[150px] h-[35px] bg-gray-300"></h1>
              <h1 className="w-[350px] h-[35px] bg-gray-300"></h1>
              <h1 className="w-[80px] h-[35px] bg-gray-300"></h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
