export function filterData  (searchText, listOfAllResturants)  {
    const filterData = listOfAllResturants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
  
    return filterData;
  };
  export const searchRestaurant = (searchText, resData) => {
    console.log(resData);
    const filterData = resData.filter((res) =>
      res?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    console.log(filterData);
    return filterData;
  };