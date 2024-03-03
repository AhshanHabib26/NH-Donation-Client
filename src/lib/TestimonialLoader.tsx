import Container from "../utils/Container";
import Styles from "../styles/TestimonialLoader.module.css";

export default function TestimonialLoader() {
  return (
    <div className={`${Styles.TestimonialloaderContainer} mt-20`}>
      <Container>
        <div className="text-center mb-4">
          <p className="w-[200px] h-[35px] bg-gray-300 mx-auto"></p>
          <h1 className="w-[400px] h-[40px] bg-gray-300 mx-auto mt-2 "></h1>
        </div>
        <div className="my-4">
          <p className="w-[700px] h-[150px] bg-gray-300 mx-auto"></p>
        </div>
        <div className="flex items-center mx-auto justify-center">
          <h1 className="w-[50px] h-[50px] bg-gray-300 rounded-full"></h1>
          <p className="w-[150px] h-[35px] bg-gray-300 ml-3"></p>
        </div>
      </Container>
    </div>
  );
}
