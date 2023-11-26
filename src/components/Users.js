import React, {useState} from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import SectionTitle from "./SectionTitle";

const data = [
  {
    name: "Microsoft 365 Administrator",
    message: `Documentation is great... initial steps for setup are really
    useful.`
  },
  {
    name: "Microsoft 365 Administrator",
    message: `Documentation is great... initial steps for setup are really
    useful.`
  },
  {
    name: "Microsoft 365 Administrator",
    message: `Documentation is great... initial steps for setup are really
    useful.`
  },
  {
    name: "Microsoft 365 Administrator",
    message: `Documentation is great... initial steps for setup are really
    useful.`
  },
  {
    name: "Microsoft 365 Administrator",
    message: `Documentation is great... initial steps for setup are really
    useful.`
  },
]

export default function Users() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      breakpoints: {
        "(min-width: 500px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 996px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      loop: true,
      slides: {
        perView: 1,
      },
    },
    [
      // add plugins here
    ]
  );
  return (
    <div className="container md:mt-24 mt-16">
      <SectionTitle
        coloredTitle="Users"
        firstTitle="What TrueCharts"
        secondTitle="Say"
      />
    <div ref={sliderRef} className="keen-slider">
      {data.map((item, index) => (
        <CardItem name="" message="" {...item} key={index} />
      ))}
    </div>
    </div>
  );
}

const CardItem = ({name, message}) => {
  return(
    <div className="keen-slider__slide">
        <div className="content relative items-center justify-center flex flex-col text-center rounded shadow dark:shadow-gray-800 m-2 p-6 bg-white dark:bg-slate-900">
          <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600"></i>
          <p className="text-slate-400">
            “{message}”
          </p>
          <h6 className="mt-2 font-semibold">{name}</h6>
        </div>
      </div>
  )
}