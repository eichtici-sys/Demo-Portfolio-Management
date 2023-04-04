import TitleSection from "./TitleSection";
import usePortfolio from "@/hooks/usePortfolio";
import {
  UilEnvelopeUpload,
  UilArrowRight,
  UilWhatsapp,
  UilPhoneVolume,
  UilMessage,
} from "@iconscout/react-unicons";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactSection = () => {
  const { profile, submitEmail } = usePortfolio();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const regexEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const regexName = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;

  const handleSendEmail = () => {
    window.location.href = `mailto:${profile.email}?subject=I%20want%20to%20contact%20you&body=Hi%20Dear%20Eichtici`;
  };

  const handleSendMessage = () => {
    window.location.href = `https://wa.me/51${profile.phone}?text=Dear%20Eichtici%20I%20want%20to%20contact%20you`;
  };

  const handleCall = () => {
    window.location.href = `tel:+51${profile.phone}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([name, email, message].includes("")) {
      toast.error("All fields are required");
      return;
    }
    if (!regexEmail.test(email)) {
      toast.error("Invalid Email");
      return;
    }

    if (name.length < 3) {
      toast.error("Invalid name");
      return;
    }

    if (message.length < 20) {
      toast.error("The message field must be at least 20 charactersd");
      return;
    }

    if (!regexName.test(name)) {
      toast.error("The name can only contain letters.");
      return;
    }
    await submitEmail({ name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="p-0 pt-3 xm:pt-20 xm:pb-20">
      <div className="max-w-7xl mx-auto xm:pt-4 pt-0">
        <TitleSection title={"Get in Touch"} span={"Contact me"} />
        <div className="py-6 grid xm:grid-cols-2 lg:grid-cols-3 mt-5 gap-y-7 sm:max-w-2xl xm:max-w-full sm:mx-auto">
          <div className="flex flex-col gap-3 col-span-1 px-5 py-4">
            <div className="text-center font-bold">
              <span className="text-[rgba(64 64 64 / 1)] dark:text-white">
                Talk to me
              </span>
            </div>
            <div
              className=" bg-gradient-to-br from-white dark:from-slate-600 dark:to-slate-600 to-white rounded-lg hover:shadow-boxSidebar transition-all text-[rgba(64 64 64 /1 )] dark:text-white dark:hover:from-primary1 dark:hover:to-primary2 dark:hover:shadow-none hover:from-primary1 hover:to-primary2 hover:text-white px-4 py-3 flex flex-col items-center group cursor-pointer"
              onClick={handleSendEmail}
            >
              <div className="my-2">
                <UilEnvelopeUpload className=" w-8 h-8" />
              </div>
              <span className="text-base">Email</span>
              <span className="text-sm font-light mb-3">{profile.email}</span>
              <div className="flex text-xs font-bold text-slate-500 dark:text-[#fafafa] group-hover:text-white  items-center gap-1 group-hover:gap-2 transition-all">
                Write me <UilArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div
              className=" bg-gradient-to-br from-white dark:from-slate-600 dark:to-slate-600 to-white rounded-lg hover:shadow-boxSidebar transition-all text-[rgba(64 64 64 /1 )] dark:text-white dark:hover:from-primary1 dark:hover:to-primary2 dark:hover:shadow-none hover:from-primary1 hover:to-primary2 hover:text-white px-4 py-3 flex flex-col items-center group cursor-pointer"
              onClick={handleSendMessage}
            >
              <div className="my-2">
                <UilWhatsapp className=" w-8 h-8" />
              </div>
              <span className="text-base">Whatsapp</span>
              <span className="text-sm font-light mb-3">{`+51 ${profile.phone}`}</span>
              <div className="flex text-xs font-bold text-slate-500 dark:text-[#fafafa] group-hover:text-white items-center gap-1 group-hover:gap-2 transition-all">
                Write me <UilArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div
              className=" bg-gradient-to-br from-white dark:from-slate-600 dark:to-slate-600 to-white rounded-lg hover:shadow-boxSidebar transition-all text-[rgba(64 64 64 /1 )] dark:text-white dark:hover:from-primary1 dark:hover:to-primary2 dark:hover:shadow-none hover:from-primary1 hover:to-primary2 hover:text-white px-4 py-3 flex flex-col items-center group cursor-pointer"
              onClick={handleCall}
            >
              <div className="my-2">
                <UilPhoneVolume className=" w-8 h-8" />
              </div>
              <span className="text-base">Phone Number</span>
              <span className="text-sm font-light mb-3">{`+51 ${profile.phone}`}</span>
              <div className="flex text-xs font-bold text-slate-500 dark:text-[#fafafa] group-hover:text-white items-center gap-1 group-hover:gap-2 transition-all">
                Call me <UilArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 row-start-1 lg:row-auto  xm:col-span-1  px-2 xm:px-5 pb-4">
            <div className="bg-white dark:bg-slate-600 rounded-lg my-4 pb-5 sm:max-w-2xl sm:mx-auto xm:max-w-full">
              <div className="text-center font-bold pt-6 text-[rgba(64 64 64 / 1)] dark:text-white">
                <span>Write me your Project</span>
              </div>
              <form
                className="px-2 xm:px-6 py-4 max-w-lg mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="my-7 relative h-12">
                  <label className="absolute -top-3 left-5 p-1 bg-white dark:bg-slate-600 dark:text-white z-10 text-sm text-slate-500">
                    Name
                  </label>
                  <input
                    type={"text"}
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Insert your name"
                    className="absolute top-0 left-0 w-full h-full border-2 border-solid border-[rgba(0,0,0,0.3)] dark:border-[#d1d1d1] bg-transparent text-darkText outline-none rounded-xl p-6 z-[1]"
                  />
                </div>
                <div className=" my-10 relative h-12">
                  <label className="absolute -top-3 left-5 p-1 bg-white dark:bg-slate-600 dark:text-white z-10 text-sm text-slate-500">
                    Mail
                  </label>
                  <input
                    type={"text"}
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Insert your email"
                    className="absolute top-0 left-0 w-full h-full border-2 border-solid border-[rgba(0,0,0,0.3)] dark:border-[#d1d1d1] bg-transparent text-darkText outline-none rounded-xl p-6 z-[1]"
                  />
                </div>
                <div className=" my-10 relative h-40">
                  <label className="absolute -top-3 left-5 p-1 bg-white dark:bg-slate-600 dark:text-white z-10 text-sm text-slate-500">
                    Your Project
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your project"
                    className="absolute top-0 left-0 w-full h-full border-2 border-solid border-[rgba(0,0,0,0.3)] dark:border-[#d1d1d1] bg-transparent text-darkText outline-none rounded-xl p-6 z-[1]"
                  />
                </div>
                <div className="flex mt-4 justify-center xm:justify-start">
                  <button type="submit" className="flex flex-nowrap">
                    Send Message
                    <UilMessage className="ml-2 rotate-[-25deg]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
