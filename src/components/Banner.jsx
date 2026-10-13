import Container from "./ui/Container";
import BannerImage from "../assets/Banner.png";
import Flex from "./ui/Flex";

const Banner = () => {
  return (
    <div className="">
      <Container>
        <Flex className="justify-between items-center">
         <div>
          <h2 className="text-[#292019] text-[65px] w-177.5 font-habibi leading-19">Modern Furniture For Modern Living Style</h2>
          <p className="font-habibi text-[20px] w-117.75 leading-7 mt-11">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstr ate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

          <p className="font-habibi text-[20px] w-117.75 leading-7 mt-10 mb-10">graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..</p>

          <button className="py-7.5 px-17.5 bg-primary font-gupter font-medium text-[27px] tracking-[2%] text-white mr-8 cursor-pointer">Reagister</button>

          <button className="py-7.5 px-17.5 border border-primary font-gupter font-medium text-[27px] tracking-[2%] text-primary cursor-pointer">Watch Video’s</button>

          
        </div>
        <div>
          <img src={BannerImage} alt="Banner" />
        </div>
        </Flex>
     
      </Container>
    </div>
  );
};

export default Banner;
