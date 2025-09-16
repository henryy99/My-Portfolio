import { IoLogoFacebook } from "react-icons/io";
import ContentFrame from "./ContentFrame";
import { useRef } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formRef.current.fullname.value);

    const mailtoLink = `mailto:henrynguyen3123@gmail.com?subject=Message from ${encodeURIComponent(
      formRef.current.fullname.value
    )}&body=${encodeURIComponent(
      formRef.current.message.value +
        "\n\nFrom " +
        formRef.current.fullname.value +
        "\n\nFrom " +
        formRef.current.email.value
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contact">
      <ContentFrame frameName="contact">
        <div className="flex flex-col w-[90%] mx-auto justify-center items-center gap-15 lg:flex-row lg:gap-10 ">
          <div className="flex flex-col w-full items-center gap-5 lg:min-h-[360px] lg:justify-between">
            <p className="text-xl">
              I would love to hear from you. If you have a question, a job
              opportunity, a project idea, a or just want to connect, feel free
              to reach out to me.
            </p>
            <div className="flex justify-center flex-col items-center gap-2">
              <h4 className="uppercase text-gray-500 tracking-wider font-semibold">
                Contact me
              </h4>
              <a
                href="mailto:Henrynguyen3123@gmail.com"
                className="uppercase text-ascent-green tracking-wider hover:scale-110 transition-all duration-1000"
              >
                Henrynguyen3123@gmail.com
              </a>
              <div className="flex gap-5 text-xl [&>*]:hover:text-ascent-green [&>*]:transition-colors [&>*]:duration-300 [&>*]:cursor-pointer">
                <a href="https://www.facebook.com/demento.huy/" target="_blank">
                  <FaFacebook />
                </a>
                <a
                  href="https://www.linkedin.com/in/henryy99/details/featured/1757886570840/single-media-viewer/?profileId=ACoAAFpIeNMBylCkCXOBYKceLuzub5Q8xS09xkE"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/dmt__huy/" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://github.com/henryy99" target="_blank">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-3 w-full [&>label]:block [&>label]:w-full [&>label]:uppercase [&>label]:tracking-widest [&>label]:text-sm"
          >
            <label htmlFor="fullname" className="">
              Full Name
              <input
                type="text"
                className="input-field"
                placeholder="Your Full Name"
                name="fullname"
              />
            </label>
            <label htmlFor="email" className="">
              Email
              <input
                type="email"
                className="input-field"
                placeholder="Your Email"
                name="email"
              />
            </label>
            <label htmlFor="message">
              Message
              <br />
              <textarea
                name="message"
                rows="4"
                className="input-field"
                placeholder="Message"
              ></textarea>
            </label>
            <input
              type="submit"
              value="send Message"
              className=" border-ascent-green border-1 rounded-sm uppercase tracking-wider px-3 py-2 font-semibold cursor-pointer md:px-6  bg-ascent-green text-primary-dark mx-auto block "
            />
          </form>
        </div>
      </ContentFrame>
    </div>
  );
}

export default Contact;
