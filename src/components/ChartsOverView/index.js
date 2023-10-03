import React, { useState, useEffect } from "react";
import {ViewOptions,countArrayLength,capitalizeWords,genTrainData} from './HelperUtil.js';
import './searchbar.css';
import chartsJson from '/static/charts/charts.json';
import loadingViewSrc from '/img/loading-aesthetic.gif';
import SearchBar from './SearchBar.js';
import GridView from './GridView.js';
import TableView from './TableView.js';
import ListView from './ListView.js';
import LoadingView from './LoadingView.js';
import EmptyView from './EmptyView.js';
import CheckboxList from './CheckboxList.js';
import { useLocation } from "react-router-dom";

const ChartsOverView = () => {
  const searchBarPlaceHolder = "Search name/description";
  const loadingViewMsg = "Loading charts data...";
  const emptyViewTitle = "Whoops!";
  const emptyViewMsg = "No charts left to filter out!";

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get the search query parameters from the URL, or use default values if they are not provided
  const searchParam = queryParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [view, setView] = useState(0);
  const [trains, setTrains] = useState([]);
  const [trainsData, setTrainsData] = useState([]);
  const [totalCount, setTotalCount] = useState(["computing..."]);
  const [loading, setLoading] = useState(true);

  const [activeCheckboxes, setActiveCheckboxes] = useState([]);

  const handleChange = (checkbox) => {
    if (activeCheckboxes.includes(checkbox.name)) {
      setActiveCheckboxes(activeCheckboxes.filter((c) => c !== checkbox.name));
    } else {
      setActiveCheckboxes([...activeCheckboxes, checkbox.name]);
    }
  };

  const handleSearch = event => {
    const txtsearch = event.target.value.toLowerCase();
    setSearchTerm(txtsearch);
  };

  useEffect(() => {
    const json = chartsJson; // Use the imported JSON data

    let totalCount = json.totalCount;
    let trains = json.trains;
    let listOfTrainsData = genTrainData(trains)
    setTrains(trains);
    setTrainsData(listOfTrainsData)
    setTotalCount(totalCount);
    setLoading(listOfTrainsData.length > 1 ? false : true);

    // Update active checkboxes based on fetched data
    setActiveCheckboxes(listOfTrainsData.map(train => train.name));
  }, []);

  const filteredCharts = trains
    .map(train => {
      return {
        name: train.name,
        count: train.count,
        charts: train.charts.filter(
          chart =>
            chart.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
            chart.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        )
      };
    })
    .filter(train => train.charts.length > 0 && activeCheckboxes.includes(train.name));

    const TrainsSection = ({ trains }) => {
      return (
        <ul>
          {trains.map((train) => (
            <li key={train.name}>
              <a href={`#${capitalizeWords(train.name)}`}>{capitalizeWords(train.name)}</a>
            </li>
          ))}
        </ul>
      );
    };

    const CountSection = ({ filteredCharts, totalCount }) => {
      return (
        <p>
          Total charts:{" "}
          <strong>
            {countArrayLength(filteredCharts) !== totalCount
              ? `${countArrayLength(filteredCharts)} (${totalCount})`
              : totalCount}
          </strong>
        </p>
      );
    };

    return (
      <div>
        {loading ? (
          <LoadingView src={loadingViewSrc} msg={loadingViewMsg} />
        ) : (
          <div>
            <TrainsSection trains={trainsData} />
            <div className="search-container">
              <CheckboxList
                checkboxData={trains}
                handleChange={(checkbox) => handleChange(checkbox)}
                activeCheckboxes={activeCheckboxes}
              />
              <SearchBar
                placeHolder={searchBarPlaceHolder}
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                setSelectedOption={(i) => setView(ViewOptions[i].value)}
                view={view}
              />
              <br />
            </div>
            {filteredCharts.length === 0 || filteredCharts.length === -1 ? (
              <EmptyView title={emptyViewTitle} msg={emptyViewMsg} />
            ) : (
              filteredCharts.map((train) => {
                switch (view) {
                  case 1:
                    return <GridView train={train} />;
                  case 2:
                    return <ListView train={train} />;
                  default:
                    return <TableView train={train} />;
                }
              })
            )}

            {countArrayLength(filteredCharts) === 0 || countArrayLength(filteredCharts) === -1 ? (
              <br />
            ) : (
              <CountSection filteredCharts={filteredCharts} totalCount={totalCount} />
            )}
          </div>
        )}
      </div>
    );
}

export default ChartsOverView;
