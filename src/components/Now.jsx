import React from "react";

const Now = () => {
  return (
    <section className="lg:mb-32">
      <div id="now" className="">
        <div className="lg:hidden grid items-center col-span-2 grid-cols-[auto_1fr] gap-4 mb-12">
          <h2
            className={`text-[20px] leading-[36px] font-semibold text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 `}
          >
            Now
          </h2>
          <span className="inline-block h-[1.5px] bg-current opacity-50 transition-all duration-300 w-full" />
        </div>
        <h2
          className={`hidden lg:flex mb-12 text-[20px] leading-[36px] font-semibold text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 `}
        >
          Now
        </h2>
        <p className="text-xs leading-8 mb-2 opacity-60 lg:text-sm ">
          Last updated: November 21st
        </p>
        <div className="mb-8">
          <p className="text-sm lg:text-base leading-6">
            Becoming the best version of myself. This "Now" page reflects my
            current priorities and goals, and I will update it regularly as my
            focus and activities change over time.
          </p>
        </div>
        <div className="mb-6">
          <h3
            className={`font-medium text-[18px] leading-[21px] mb-3 lg:text-[24px]`}
          >
            What I am doing:
          </h3>
          <p className="text-xs leading-6 opacity-60 lg:text-sm">
            As of November 2024, here are a few things I'm focused on:
          </p>
        </div>

        <ul className="space-y-4 mb-6 list-disc pl-5">
          <li className="leading-6 text-sm lg:text-base">
            <strong>Decorating my new home:</strong> Adding pieces of decor and
            household items to make my new house a home.
          </li>

          <li className="leading-6 text-sm lg:text-base">
            <strong>Morning walks before I start working:</strong> Prioritizing
            physical health and mental clarity.
          </li>

          <li className="leading-6 text-sm lg:text-base">
            <strong>Working on Building bloques and upcoming ventures:</strong>{" "}
            Dedicating my leisure-time to grow my projects.
          </li>

          <li className="leading-6 text-sm lg:text-base">
            <strong>Sleeping More:</strong> Changing my wake up time from 5am to
            6am has allowed me to sleep more which in turn makes me more active
            during the day and with less cravings.
          </li>

          <li className="leading-6 text-sm lg:text-base">
            <strong>Being consistent in working on my projects:</strong> Early
            planning for a minimal task management app.
          </li>
        </ul>

        <div className="mb-10 leading-6 text-sm lg:text-base space-y-2">
          <p>
            I plan to update this page regularly, reflecting on my progress and
            adjusting my focus as needed. Stay tuned for the next update!{" "}
            </p>
            <p>
            This is a now section, if you do not have one, {" "}
            <a
              href="https://nownownow.com/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              consider adding one to your site
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Now;
