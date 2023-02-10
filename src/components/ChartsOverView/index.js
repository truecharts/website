import React, { useState, useEffect } from "react";
import '../../css/searchbar.css';
import HelperUtil,{ViewOptions,TRAINS,countArrayLength} from './HelperUtil.js';
import SearchBar from './SearchBar.js';
import GridView from './GridView.js';
import TableView from './TableView.js';
import ListView from './ListView.js';
import LoadingView from './LoadingView.js';
import EmptyView from './EmptyView.js';
import CheckboxList from './CheckboxList.js';
  
const ChartsOverView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState(0);
  const [trains, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(["computing..."]);
  const [loading, setLoading] = useState(true);

  const [activeCheckboxes, setActiveCheckboxes] = useState(
    TRAINS.map(checkbox => checkbox.name)
  );

  const handleChange = (checkbox) => {
    if (activeCheckboxes.includes(checkbox.name)) {
      setActiveCheckboxes(activeCheckboxes.filter((c) => c !== checkbox.name));
    } else {
      setActiveCheckboxes([...activeCheckboxes, checkbox.name]);
    }
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/charts/charts.json');
      const json = await result.json();
      let totalCount = json.totalCount;
      let trains = json.trains;
      
      setData(trains);
      setTotalCount(totalCount);
      setLoading(trains.length > 1 ? false:true);
    };
    fetchData();
  }, []);

  const filteredCharts = trains
    .map(train => {
      return {
        name: train.name,
        count: train.count,
        charts: train.charts.filter(
          chart =>
            chart.name.toLowerCase().indexOf(searchTerm) !== -1
        )
      };
    })
    .filter(train => train.charts.length > 0 && activeCheckboxes.includes(train.name));
    
    return (
        <div>
          <div className="search-container">
            <SearchBar placeHolder="Search by App name" searchTerm={searchTerm} handleSearch={handleSearch} setSelectedOption={(i)=> setView(ViewOptions[i].value)} view={view}/>
            <CheckboxList checkboxData={TRAINS} handleChange={(checkbox)=> handleChange(checkbox)} activeCheckboxes={activeCheckboxes}/>
          </div>
          <br/>
          {loading ? <LoadingView />: (
            filteredCharts.length == 0 || filteredCharts.length == -1? <EmptyView/>:
              filteredCharts.map(train => {
                switch (view) {
                  case 1:
                  return <GridView train={train} />;
                  case 2:
                  return <ListView train={train} />;
                  default:
                  return <TableView train={train} />;
                  }
              }
              ))}
          { countArrayLength(filteredCharts) == 0 || countArrayLength(filteredCharts) == -1 ? <br/>:<p>Total charts: <strong>{countArrayLength(filteredCharts) !== totalCount ? `${countArrayLength(filteredCharts)} (${totalCount})`: totalCount}</strong></p> }
        </div>
      );
    };

export default ChartsOverView;