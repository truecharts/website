
export const getSourceName = (source) => {
    let stripped = source.toString().replace(/^https:\/\//, '');
  return stripped;
}

//checks if its in fact a link
export const isLink = (value) => {
    try {
      new URL(value.toString());
      return true;
    } catch (_) {
      return false;
    }
  };

  export const capitalizeWords = (str) => {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  export const countArrayLength = (trains) => {
    return trains.reduce((acc, curr) => acc + curr.charts.length, 0);
  }
  
  export const ViewOptions = [
    { name: 'Table', value: 0, img: '/img/table.png' },
    { name: 'Grid', value: 1, img: '/img/grid.png' },
    { name: 'List', value: 2, img: '/img/list.png' }
  ];

  export const genTrainData = (trains) => {
    const list = trains.map((train) => {
      return {
        name: train.name,
        count: train.count
      };
    });
    return list;
  }