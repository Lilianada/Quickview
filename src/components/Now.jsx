import React from "react";

const Now = () => {
  return (
    <section>
      <div id="now" className="">
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-left lg:text-[70px] lg:font-[900] lg:leading-[70px] lg:w-1/3 `}
        >
          Now
        </h2>
        <p className="text-[12px] leading-6 opacity-60 lg:text-[14px]">
          Last updated: November 21st
        </p>
        <div className="mb-8">
          <p className="text-[12px] leading-6 lg:text-[14px]">
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
          <p className="text-[12px] leading-6 opacity-60 lg:text-[14px]">
            As of November 2024, here are a few things I'm focused on:
          </p>
        </div>

        <ul className="space-y-4 mb-6 list-disc pl-5">
          <li className="text-[12px] leading-6 lg:text-[14px]">
            <strong >
              Decorating my new home:
            </strong>{" "}
            Adding pieces of decor and household items to make my new house a
            home.
          </li>

          <li className="text-[12px] leading-6 lg:text-[14px]">
            <strong >
              Morning walks before I start working:
            </strong>{" "}
            Prioritizing physical health and mental clarity.
          </li>

          <li className="text-[12px] leading-6 lg:text-[14px]">
            <strong >
              Working on Building bloques and upcoming ventures:
            </strong>{" "}
            Dedicating my leisure-time to grow my projects.
          </li>

          <li className="text-[12px] leading-6 lg:text-[14px]">
            <strong >Sleeping More:</strong>{" "}
            Changing my wake up time from 5am to 6am has allowed me to sleep
            more which in turn makes me more active during the day and with less
            cravings.
          </li>

          <li className="text-[12px] leading-6 lg:text-[14px]">
            <strong >
              Being consistent in working on my projects:
            </strong>{" "}
            Early planning for a minimal task management app.
          </li>
        </ul>

        <div className="mb-10 text-[12px] leading-6 lg:text-[14px]">
          <p>
            I plan to update this page regularly, reflecting on my progress and
            adjusting my focus as needed. Stay tuned for the next update!{" "}
            <a
              href="https://"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consider adding one to your site
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Now;
