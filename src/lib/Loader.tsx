import Container from "../utils/Container";
import Styles from "../styles/Loader.module.css";

export default function Loader() {
  const Counter = ["", "", "", "", "", ""];

  return (
    <Container>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {Counter.map((count, index) => (
            <div
              key={index}
              className={`${Styles.loaderContainer} border p-3 rounded-md`}
            >
              <img className="h-[200px] bg-gray-300 rounded-sm" src="" alt="" />
              <button className="bg-gray-300 w-[80px] h-[40px] mt-3 rounded-md"></button>
              <h1 className=" bg-gray-300 border h-[30px] my-2"></h1>
              <div className="flex justify-end mt-3">
                <button className="w-[40px] h-[25px] bg-gray-300 rounded-sm"></button>
                <button className="w-[40px] mx-1 h-[25px] bg-gray-300 rounded-sm"></button>
                <button className="w-[40px] h-[25px] bg-gray-300 rounded-sm"></button>
                <button className="w-[40px] ml-1 h-[25px] bg-gray-300 rounded-sm"></button>
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-gray-300 w-[100px] h-[40px] rounded-sm "></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
