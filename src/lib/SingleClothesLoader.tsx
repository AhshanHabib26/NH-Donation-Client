import Container from "../utils/Container";
import Styles from "../styles/SingleClothesLoader.module.css";

export default function SingleClothesLoader() {
  return (
    <div className={`${Styles.SingleClothesloaderContainer}`}>
      <div className="w-full h-[150px] bg-gray-300 py-8">
        <h1 className="w-[70%] h-[80px] bg-[#c9c7c7] mx-auto rounded-lg"></h1>
      </div>
      <Container>
        <div className="my-12 max-w-4xl lg:mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="w-[420px] h-[400px] bg-gray-300"></h1>
          </div>
          <div>
            <div className="mb-3">
              <h1 className="w-[120px] h-[35px] bg-gray-300"></h1>
              <p className="lg:w-[520px] h-[45px] bg-gray-300 mt-2"></p>
            </div>
            <div className="mb-3 flex items-center">
              <h1 className="w-[150px] h-[35px] bg-gray-300"></h1>
              <p className="w-[80px] h-[35px] bg-gray-300 ml-3"></p>
            </div>
            <div className="mb-3 flex items-center">
              <h1 className="w-[120px] h-[35px] bg-gray-300"></h1>
              <div className="flex items-center">
                <p className="w-[40px] h-[35px] bg-gray-300 ml-5"></p>
                <p className="w-[40px] h-[35px] bg-gray-300 ml-2 "></p>
                <p className="w-[40px] h-[35px] bg-gray-300 mx-2 "></p>
                <p className="w-[40px] h-[35px] bg-gray-300 "></p>
              </div>
            </div>
            <div className="mb-3">
              <h1 className="w-[150px] h-[35px] bg-gray-300"></h1>
              <p className="lg:w-[550px] h-[100px] bg-gray-300 mt-3"></p>
            </div>
            <div>
              <h1 className="w-[150px] h-[45px] bg-gray-300 rounded-lg"></h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
