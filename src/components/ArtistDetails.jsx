import React from "react";

function ArtistDetails({ artist }) {
  return (
    <li style={{ listStyleType: "none", marginBottom: "20px", display: "flex", alignItems: "flex-start" }}>
      <img 
        src={artist.photo_url} 
        alt={`${artist.name}`} 
        style={{ 
          width: "130px", 
          height: "130px",  
          borderRadius: "50%",  
          objectFit: "cover", 
          marginRight: "20px" 
        }} 
      />
      <div>
        <h2>{artist.name}</h2>
        <p>Country: {artist.country}</p>
        <p>Years Active: {artist.years_active}</p>
      </div>
    </li>
  );
}

export default ArtistDetails;

