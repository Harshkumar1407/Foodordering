const Shimmer = () => {
  return (
    <div className="resturant-lists" data-testid="Shimmer">
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div  key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
