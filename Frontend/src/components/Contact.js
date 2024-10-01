import { APP_LOGOIMG } from "../utils/constants";

const Contact = () => {
  return (
    <div>
      <h1 className=" mt-2 text-4xl font-[500] text-center">Contact Us</h1>
      <div className="mx-auto flex justify-evenly">
        <div className="p-6 m-16 w-[500px] bg-white shadow-lg">
          <img src={APP_LOGOIMG} alt="" className="ml-40 w-32 h-20" />
          <h1 className="mt-6 font-bold text-center">Foodie Address</h1>
          <h1 className="mt-6">
            La cliff, No.11, 1st Floor, VOC St, Ranga Colony, Sembakkam,
            Rajakilpakkam, Tamil Nadu 600073.
          </h1>
          <h1>
            5A, 47/48, 1st Cross Street, Ranga Colony, Rajakilpakkam, Chennai –
            600 073.
          </h1>
        </div>
        <div className="p-6 m-16 w-[200px] bg-white shadow-lg">
          <img
            src="https://img.freepik.com/free-vector/telephone-call-icon-3d-vector-illustration-social-media-symbol-networking-sites-apps-cartoon-style-isolated-white-background-online-communication-digital-marketing-concept_778687-1734.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid"
            alt=""
            className="w-32 h-20"
          />

          <h1 className="mt-6 font-bold text-center">Call Us</h1>
          <h1 className="mt-6  text-center">9384974729</h1>
        </div>
        <div className="p-6 m-16 w-[300px] bg-white shadow-lg">
          <img
            src="https://freepngimg.com/download/gmail/66572-google-icons-computer-logo-email-gmail.png"
            alt=""
            className="ml-16 w-28 h-20"
          />
          <h1 className="mt-6 font-bold text-center">Email Us</h1>
          <h1 className="mt-6 text-center">vijaysethu0101@gmail.com</h1>
        </div>
      </div>
      {/* <div className="p-36  w-6/12 bg-orange-300">
            <input type="text" placeholder="name" className="p-1 m-1 border border-black rounded-md" ></input>
            <input type="text" placeholder="message" className="p-1 m-1 border border-black rounded-md" ></input>
            <button className="p-1 m-1 border border-black rounded-md bg-gray-200">Submit</button>

            </div> */}
    </div>
  );
};
export default Contact;
