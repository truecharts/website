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
  export const TRAINS = [
    { name: 'stable', emoji: '✅' },
    { name: 'enterprise', emoji: '👔'},
    { name: 'incubator', emoji: '⚠️' },
    { name: 'dependency', emoji: '🔨' }
  ];