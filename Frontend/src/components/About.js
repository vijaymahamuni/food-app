import {
  ABOUTUS_IMG1,
  ABOUTUS_IMG2,
  APP_LOGOIMG,
  MISSION_IMG,
} from "../utils/constants";

const About = () => {
  return (
    <div className="mx-auto">
      <h1 className="  text-4xl mt-2 font-[500] text-center">About Us</h1>
      {/* <Users Location={"Chennai"} />  */}
      <div className="p-6 m-6 flex justify-between">
        <div>
          <img src={ABOUTUS_IMG1} alt="" />
        </div>
        <div className="p-6 m-4">
          <h1 className="text-orange-600 font-bold">ABOUT US</h1>
          <h2 className="font-bold mt-1">
            Bringing Delicious Meals to Your Doorstep
          </h2>
          <p className="my-2">
            Welcome to Foodie, your go-to app for discovering and ordering the
            best food from your favorite restaurants. We are committed to
            delivering not just food, but a delightful dining experience.
          </p>
        </div>
      </div>
      <div className="p-6 m-6 flex justify-between">
        <div className="p-6 m-4">
          <h2 className="text-4xl font-bold">Our Story</h2>
          <p className="mt-8">
            Foodie was born out of a love for great food and a desire to make it
            accessible to everyone, everywhere. What started as a small project
            has now grown into a full-fledged platform connecting food lovers
            with the best restaurants in town.
          </p>
        </div>
        <div>
          <img src={ABOUTUS_IMG2} alt="" className="w-[700px] h-[300px]" />
        </div>
      </div>
      <div className="p-6 m-6 flex justify-between">
        <div>
          <img src={MISSION_IMG} alt="" className="w-[450px] h-[250px]" />
        </div>
        <div className="p-6 m-4">
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="mt-8">
            Our mission is simple: to make every meal a celebration of taste and
            convenience. We envision a world where good food is always just a
            click away.
          </p>
        </div>
      </div>
      <div className="p-6 m-6 flex justify-between">
        <div>
          <h2 className="text-4xl font-bold">Why Choose Us?</h2>
          <p className="mt-8">
            With Foodie, you get access to a curated selection of top
            restaurants, lightning-fast delivery, and an easy-to-use app that
            makes ordering food a breeze.
          </p>
        </div>
        <div>
          <img src={APP_LOGOIMG} alt="" className="w-[400px] h-[250px]" />
        </div>
      </div>
    </div>
  );
};
export default About;
