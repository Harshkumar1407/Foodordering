export function filterData  (searchText, listOfAllResturants)  {
    const filterData = listOfAllResturants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
  
    return filterData;
  };