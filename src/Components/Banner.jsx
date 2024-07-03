import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div class="w-full h-full bg-gray-900 dark:bg-gray-200">
      <div class="h-screen w-full mx-auto py-20 xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4">
        <div class="w-full">
          <img
            class="rounded-full md:max-w-[70%] sm:max-w-[50%] xs:max-w-[60%] mx-auto"
            src="https://techakim.com/sam/tg/7268/li/imgs/profile.jpg"
            alt="My Image"
          />
        </div>
        <div class="w-full flex flex-col justify-center gap-4 text-white dark:text-gray-800 md:mt-0 sm:mt-8 xs:mt-4">
          <h1 class="text-4xl font-semibold font-serif">
            Hello, I'm Syed Shahriar
          </h1>
          <h3 class="capitalize text-rose-400">
            i'm{" "}
            <span class="typing text-green-500 dark:text-green-700">
              fullstack developer
            </span>
          </h3>
          <p>
            Experienced full-stack developer with 4+ years of expertise in
            Laravel, NestJS, Nuxt.js, Next.js, Android, and some Flutter
            experience.
          </p>
          <div class="sm:mt-4 xs:mt-2">
            <button class="px-6 py-1 bg-rose-500 text-white rounded-sm">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
