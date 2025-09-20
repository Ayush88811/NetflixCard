import styles from "./Netflix.module.css";
import styled from "styled-components";

export const SeriesCard = ({ data }) => {
    // console.log(props);
    const {id, img_url, name, rating, description, cast, genre, watch_url } = 
      data;

      // const btn_style = {
      const ButtonThapa = styled.button({

        padding: "1.2rem 2.4rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor: `${rating >= 8.5 ? "green" : "#f7dc6f"}`,
        color:"var(--bg-color)",
      });
      

      const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

  return(
     <li className={styles.card}>
    
      <div>
        <img 
        src={img_url}
        alt={name}
        width="40%" 
        height="50%"
        />  
    </div>
    <div className="flex flex-col gap-6 p-6">
      <h2>Name : {name}</h2>
      <h3>Rating:
        <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
          </h3>
          
      <p className="text-3xl font-bold underline">Summary: {description}</p>
      {/* <p>genre:{genre.join(", ")} </p> */}
      <p>Cast:{cast.join(", ")}</p>
      <a href={watch_url} target="_blank">
      {/* <button style={btn_style} >Watch Now</button> */}
      <ButtonThapa>Watch Now</ButtonThapa>
      </a>
    </div>
     </li>
    );
};