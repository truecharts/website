import { contributors } from "../../assets/contributors.json";
import { getChartsFromTrain, getTrains } from "../chart-list/utils";

// Contributors
const genImageName = (url: string) => {
  return url.split("/").pop()?.split("?v")[0];
};
const genImageUrl = (name: string) => {
  return `/assets/contributors/${genImageName(name)}.webp`;
};

export const getContributors = () => {
  // Remove people with no image
  let filteredPeople = contributors.filter((p) => p.avatar_url !== null);
  // Deduplicate people
  filteredPeople = filteredPeople.reduce((total, person) => {
    // if profile is already in total, skip
    if (total.some((p) => p.profile === person.profile)) return total;
    // if name is already in total, skip
    if (total.some((p) => p.name === person.name)) return total;
    // make sure the image name can be generated
    if (!genImageName(person.avatar_url)) return total;

    total.push(person);
    return total;
  }, [] as typeof filteredPeople);

  return filteredPeople.map((p) => ({
    id: p.name,
    img: genImageUrl(p.avatar_url),
    url: p.profile,
  }));
};

// Charts
const getImageUrl = (name: string) => {
  return `/img/hotlink-ok/chart-icons-small/${name}.webp`;
};

export const getCharts = () => {
  const trains = getTrains();
  const charts = trains.map((train) => getChartsFromTrain(train)).flat();
  return charts.map((c) => ({
    id: c.name,
    img: getImageUrl(c.name),
    url: c.link,
  }));
};
