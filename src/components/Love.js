import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import Lottie from "react-lottie";
import clickAnimation from "../animations/113140-hand-cursor-click-here.json";
import systemAnimation from "../animations/94703-system.json";
import stabilityAnimation from "../animations/119697-icon-stability.json";
import SectionTitle from "./SectionTitle";
import Link from "@docusaurus/Link";
import styles from "../pages/index.module.css";

const clickAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: clickAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    speed: 0.5,
  },
};
const systemAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: systemAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    speed: 0.5,
  },
};
const stabilityAnimationOptions = {
  loop: true,
  autoplay: true,
  animationData: stabilityAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    speed: 0.5,
  },
};

export default function Love() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wow.js");
      const father = require("feather-icons");

      new WOW({
        live: false,
      }).init();
      father.replace();
    }
  }, []);
  return (
    <div className="container">
      <div className="container">
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/sponsor">
            Sponsor TrueCharts
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://discord.gg/tVsPTHWTtr"
          >
            {/* https://icon-sets.iconify.design/akar-icons/discord-fill/ */}
            <Icon
              icon="skill-icons:discord"
              className="align-middle mr-2 mb-1"
            />
            Join Us On Discord
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[120px] pt-10">
        <div
          className="!relative items-center justify-center flex flex-col wow animate__animated animate__fadeInLeft"
          data-wow-delay=".3s"
        >
          <div className="overflow-hidden lg:h-[450px] h-[450px] lg:w-[450px] w-[450px] bg-indigo-600/5 bottom-0 left-0 rotate-45 -z-1 rounded-3xl">
            <Lottie
              options={clickAnimationOptions}
              isClickToPauseDisabled={true}
            />
          </div>
        </div>
        <div
          className="lg:ml-8 wow animate__animated animate__fadeInRight"
          data-wow-delay=".3s"
        >
          <br />
          <h3 className="mb-4 text-3xl leading-normal font-bold">
            Easy To Deploy
          </h3>
          <p className="text-slate-400">
            With TrueCharts, users can quickly and easily deploy a wide range of
            apps and services on their TrueNAS SCALE systems. Here are some
            potential list items to further describe the features and benefits
            of TrueCharts:
          </p>
          <ul className="list-none text-slate-400 mt-4">
            <li className="mb-1 flex">
              <Icon
                className="text-indigo-600 text-xl mr-2"
                icon="material-symbols:check-circle-outline"
              />{" "}
              Neatly organized catalog
            </li>
            <li className="mb-1 flex">
              <Icon
                className="text-indigo-600 text-xl mr-2"
                icon="material-symbols:check-circle-outline"
              />{" "}
              Rapid deployment
            </li>
            <li className="mb-1 flex">
              <Icon
                className="text-indigo-600 text-xl mr-2"
                icon="material-symbols:check-circle-outline"
              />{" "}
              Customization options
            </li>
            <li className="mb-1 flex">
              <Icon
                className="text-indigo-600 text-xl mr-2"
                icon="material-symbols:check-circle-outline"
              />{" "}
              Active development
            </li>
          </ul>
        </div>
      </div>

      <div className="md:mt-24 mt-16 p">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[120px] pt-10">
          <div
            className="relative order-1 md:order-2 wow animate__animated animate__fadeInRight"
            data-wow-delay=".5s"
          >
            <div className="overflow-hidden lg:h-[450px] h-[450px] lg:w-[450px] w-[450px] bg-indigo-600/5 bottom-0 right-0 rotate-45 -z-1 rounded-3xl">
              <Lottie
                options={systemAnimationOptions}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>

          <div
            className="lg:mr-8 order-2 md:order-1 wow animate__animated animate__fadeInLeft"
            data-wow-delay=".5s"
          >
            <h3 className="mb-4 text-3xl leading-normal font-bold">
              Consistent Ecosystem
            </h3>
            <p className="text-slate-400">
              All apps are built on the same foundation and share a common
              deployment experience, which can provide several benefits, such as
              streamlined management and easier troubleshooting. Here are some
              potential features and benefits of the consistent ecosystem
              offered by TrueCharts:
            </p>
            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Shared base image
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Standardized deployment process
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Centralized management
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Compatibility and reliability
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Customizability
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" md:mt-24 mt-16">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[120px] pt-10">
          <div
            className="!relative items-center justify-center flex flex-col wow animate__animated animate__fadeInLeft"
            data-wow-delay=".3s"
          >
            <div className="overflow-hidden lg:h-[450px] h-[450px] lg:w-[450px] w-[450px] bg-indigo-600/5 bottom-0 left-0 rotate-45 -z-1 rounded-3xl">
              <Lottie
                options={stabilityAnimationOptions}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>

          <div
            className="lg:ml-8 wow animate__animated animate__fadeInRight"
            data-wow-delay=".3s"
          >
            <h3 className="mb-4 text-3xl leading-normal font-bold">
              Stability
            </h3>
            <p className="text-slate-400">
              TrueCharts places a high priority on stability, with the goal of
              ensuring that deployed apps remain running reliably and
              consistently over time. This focus on stability can be critical
              for enterprise and production environments, where downtime can
              result in lost productivity, revenue, and customer satisfaction.
              Here are some potential features and benefits of the stability
              focus of TrueCharts:
            </p>

            <ul className="list-none text-slate-400 mt-4">
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Thorough testing
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Version control
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Continuous monitoring
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Security updates
              </li>
              <li className="mb-1 flex">
                <Icon
                  className="text-indigo-600 text-xl mr-2"
                  icon="material-symbols:check-circle-outline"
                />{" "}
                Community support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
