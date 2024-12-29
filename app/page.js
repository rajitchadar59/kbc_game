"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handletrynow = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/play");
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="flex flex-col justify-center items-start text-[#944f8e] px-6 md:px-16 py-6">
          <p className="font-bold text-2xl md:text-3xl">
            Welcome to Kon Banega Crorepati
          </p>
          <p className="font-bold text-2xl md:text-3xl">
            The most popular Game in India
          </p>
          <p className="mt-4 text-sm md:text-base leading-relaxed">
            Kaun Banega Crorepati (KBC) is a popular Indian television game show
            based on the British program "Who Wants to Be a Millionaire?"
            Hosted by the iconic Bollywood actor Amitabh Bachchan, the show has
            captivated audiences since its debut in 2000.
          </p>
          <div className="flex gap-4 my-8">
            <button
              onClick={handletrynow}
              className="bg-[#6c4164] w-36 md:w-48 rounded-full border border-black border-opacity-100 h-10 text-white font-bold hover:bg-[#8a547b] transition duration-300"
            >
              Try Now
            </button>
          </div>




          
        </div>

        
        <div className="h-64 md:h-auto">
          <img
            src="kbc.jpg"
            className="w-full h-full object-cover rounded-lg "
            alt="KBC"
          />
        </div>
      </div>
    </>
  );
}
