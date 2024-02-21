import Styles from "../styles/Loader.module.css";

const DashboardLoader = () => {
  return (
    <div
      className={`${Styles.loaderContainer} max-w-5xl mx-5 lg:mx-auto my-12`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className=" h-[350px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1] flex shadow rounded items-center justify-center">
          <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1] shadow border border-gray-300  rounded-full"></div>
        </div>
        <div className=" h-[350px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1] flex shadow rounded items-center justify-center">
          <div className="w-[200px] h-[200px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1] shadow border border-gray-300  rounded-full"></div>
        </div>
      </div>
      <div className=" grid grid-cols-3 lg:grid-cols-8 shadow p-3 mx-auto max-w-4xl my-5">
        <div className="  h-[300px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
        <div className=" mt-[100px]  h-[200px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
        <div className="mt-[50px] h-[250px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
        <div className=" h-[300px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
        <div className=" mt-[50px] h-[250px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
        <div className="mt-[100px] h-[200px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
        <div className="mt-[150px] h-[150px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
        <div className="mt-[200px] h-[100px] w-[100px] bg-gradient-to-r from-[#c0c0bc] to-[#cde2e1]"></div>
      </div>
    </div>
  );
};

export default DashboardLoader;
