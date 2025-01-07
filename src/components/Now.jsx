import React from "react";
import { useTheme } from "../context/ThemeContext";

const Now = () => {
  const { theme } = useTheme();
  return (
    <section>
      <div id="now" className="lg:hidden">
        <h2
          className={`text-[20px] leading-[36px] font-semibold mb-12 text-left`}
          style={{ color: theme.primaryText }}
        >
          Now
        </h2>
        <div className="mb-10">
          <p className=" text-[12px] leading-6"> Last updated: November 21st</p>
        </div>
        <div className="mb-10">
          <h3
            className={` font-medium text-[18px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Keep up with me:
          </h3>
          <p className=" text-[12px] leading-6">
            Becoming the best version of myself. This “Now” page reflects my
            current priorities and goals, and I will update it regularly as my
            focus and activities change over time.
          </p>
        </div>
        <div className="mb-10">
          <h3
            className={` font-medium text-[18px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            What I am doing:
          </h3>
          <p className=" text-[12px] leading-6">
            As of November 2024, here are a few things I’m focused on:
          </p>
        </div>
        <div className="mb-10">
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Eating Whole Food:
          </h3>
          <p className=" text-[12px] leading-6">
            Becoming the best version of myself. This “Now” page reflects my
            current priorities and goals, and I will update it regularly as my
            focus and activities change over time.
          </p>
        </div>
        <div className="mb-10">
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Decorating my new home:
          </h3>
          <p className=" text-[12px] leading-6">
            Adding pieces of decor and household items to make my new house a
            home.
          </p>
        </div>
        <div className="mb-10">
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Morning walks before I start working:
          </h3>
          <p className=" text-[12px] leading-6">
            Prioritizing physical health and mental clarity.
          </p>
        </div>
        <div className="mb-10">
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Working on Building bloques and upcoming ventures:
          </h3>
          <p className=" text-[12px] leading-6">
            Dedicating my leisure-time to grow my projects.
          </p>
        </div>
        <div className="mb-10">
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Sleeping More
          </h3>
          <p className=" text-[12px] leading-6">
            Changing my wake up time from 5am to 6am has allowed me to sleep
            more which in turn makes me more active during the day and with less
            cravings.
          </p>
        </div>
        <div className="mb-10">
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Being consistent in working on my projects
          </h3>
          <p className=" text-[12px] leading-6">
            Early planning for a minimal task management app.
          </p>
        </div>
        <div className="mb-10">
          <p className=" text-[12px] leading-6">
            I plan to update this page regularly, reflecting on my progress and
            adjusting my focus as needed. Stay tuned for the next update! This
            is a now page, if you do not have one, consider adding one to your
            site
          </p>
        </div>
      </div>
      <div id="desktop-now" className="min-h-screen hidden lg:flex flex-col">
        <div className="">
          <h2
            className={`text-[70px] font-[900] leading-[70px] w-1/3 mb-24`}
            style={{ color: theme.primaryText }}
          >
            Now
          </h2>
        </div>
        <div className={`mb-10 `}>
          <h3
            className={`font-medium text-[18px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            What I am doing
          </h3>
          <p className=" text-[12px] leading-6">
            As of November 2024, here are a few things I’m focused on:
          </p>
        </div>
        <div className={`mb-10`}>
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Eating Whole Food
          </h3>
          <p className=" text-[12px] leading-6">
            Becoming the best version of myself. This “Now” page reflects my
            current priorities and goals, and I will update it regularly as my
            focus and activities change over time.
          </p>
        </div>
        <div className={`mb-10 `}>
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Decorating my new home
          </h3>
          <p className=" text-[12px] leading-6">
            Adding pieces of decor and household items to make my new house a
            home.
          </p>
        </div>
        <div className={`mb-10 `}>
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Morning walks before I start working
          </h3>
          <p className=" text-[12px] leading-6">
            Prioritizing physical health and mental clarity.
          </p>
        </div>
        <div className={`mb-10 `}>
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Working on Building bloques and upcoming ventures:
          </h3>
          <p className=" text-[12px] leading-6">
            Dedicating my leisure-time to grow my projects.
          </p>
        </div>
        <div className={`mb-10 `}>
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Sleeping More
          </h3>
          <p className=" text-[12px] leading-6">
            Changing my wake up time from 5am to 6am has allowed me to sleep
            more which in turn makes me more active during the day and with less
            cravings.
          </p>
        </div>
        <div className={`mb-10 `}>
          <h3
            className={`font-medium text-[12px] leading-[21px] mb-3`}
            style={{ color: theme.primaryText }}
          >
            Being consistent in working on my projects
          </h3>
          <p className=" text-[12px] leading-6">
            Early planning for a minimal task management app.
          </p>
        </div>
        <div className={`mb-10 `}>
          <p className=" text-[12px] leading-6">
            I plan to update this page regularly, reflecting on my progress and
            adjusting my focus as needed. Stay tuned for the next update! This
            is a now page, if you do not have one, consider adding one to your
            site
          </p>
        </div>
      </div>
    </section>
  );
};

export default Now;
