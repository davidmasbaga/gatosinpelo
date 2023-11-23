// Ordenar por fecha
export const sortByDate = (array) => {
    const sortedArray = array.sort((a, b) => {
      const dateA = new Date(a.data.pubDate);
      const dateB = new Date(b.data.pubDate);
      return dateB - dateA;
    });
    return sortedArray;
  };
  
  // Ordenar por peso
  export const sortByWeight = (array) => {
    const withWeight = array.filter(item => item.data.weight);
    const withoutWeight = array.filter(item => !item.data.weight);
    const sortedWeightedArray = withWeight.sort((a, b) => a.data.weight - b.data.weight);
    const sortedArray = [...new Set([...sortedWeightedArray, ...withoutWeight])];
    return sortedArray;
  };
  