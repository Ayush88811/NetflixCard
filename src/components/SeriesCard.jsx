export const SeriesCard = ({ data }) => {
    // console.log(props);
    const {id, img_url, name, rating, description, cast, genre, watch_url } = 
      data;
  return(
     <li key={id} style={{ listStyle: "none", margin: "20px 0" }}>
    
      <div>
        <img 
        src={img_url}
        alt={name}
        width="40%" 
        height="50%"
        />  
    </div>
    <h2>Name: {name}</h2>
    <h3>Rating:{rating}</h3>
    <p>Summary: {description}</p>
    {/* <p>genre:{genre.join(", ")} </p> */}
    <p>Cast:{cast.join(", ")}</p>
    <a href={watch_url} target="_blank">
    <button>Watch Now</button>
    </a>
    
     </li>
    );
};