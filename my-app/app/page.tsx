import NavBar from "@/components/navbar";
import Image from "next/image";
import profilePic from "@/public/images/profile-pic.jpg";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



export default function Page() {

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/falarion08",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/ryan-onil-barrion-b35667215",
    },
    {
      icon: SiGmail,
      url: "mailto:barrion.ryanonil@gmail.com",
    },
  ];
  return (
    <>
      <NavBar />
      <main>
        <div className="flex  items-center justify-center min-h-screen py-2 space-x-20">

          <span>
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full w-96 h-96 object-cover"
            />
          </span>


          <span>
            <p className=" text-sm text-sage-green font-roboto-mono">Hello I'm</p>
            <p className="text-7xl font-bold text-white">Ryan Onil </p>
            <p className=" text-7xl text-sage-green font-bold ">Barrion</p>
            <p className="text-lg font-roboto-mono mt-5">I am a AI Software Engineer. </p>


            <div className="flex space-x-8 my-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.url}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-hero-effect z-0"
                  >
                    <Icon
                      className="h-8 w-8  transition-colors z-10 "
                    />
                  </a>
                );
              })}
            </div>

            <a className="hover:text-white hover:cursor-pointer  text-lg  flex flex-col items-center justify-center">
              <span>Scroll To Explore</span> 
               <FaArrowDown className="animate-bounce borrder border-white my-1"/>
            </a>

          </span>
        </div>
      </main>

    </>
  );
}