import ContactForm from "../components/ContactForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocation, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";

const ContactLayout = () => {
  return (
    <div>
        <div className=" text-center mt-24 mb-3">
      <p className="text-4xl font-semibold">Get In Touch With Us</p>
      <p className=" text-[#9F9F9F] mx-[398px]">
        For More Information About Our Product & Services. Please Feel Free To
        Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
        Hesitate!</p>
        </div>
        <div className="flex flex-row justify-between mx-48 " >
        <div className="flex flex-col items-centerw-[393px] h-[537px] mt-16 mb-80">
            
            <FontAwesomeIcon icon={faLocationDot} />
            <div className="w-[212px] ">
                <p className="font-medium text-2xl">Address</p>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
            
            <div className="w-[212px] ">
            <FontAwesomeIcon icon={faPhone} />
                <p className="font-medium text-2xl">Phone</p>
                <p>Mobile: +(84) 546-6789
                Hotline: +(84) 456-6789</p>
            </div>
           
            <div className="w-[212px]">
            <FontAwesomeIcon icon={faClock} />
                <p className="font-medium text-2xl">Working Time</p>
                <p>Monday-Friday: 9:00 - 22:00
                Saturday-Sunday: 9:00 - 21:00</p>
            </div>
        </div>
            <ContactForm />

        </div>
      
    </div>
  );
};

export default ContactLayout;
