import React from 'react';
import { useLocation } from 'react-router-dom';
import { backend_api } from '../App';
export const Detail = () => {
  const location = useLocation();
  let prop_data=''
  if(location.state.blog){
     prop_data=location.state.blog
  }
  if(location.state.country){
     prop_data=location.state.country
  }
  if(location.state.Mbbs_country){
     prop_data=location.state.Mbbs_country
  }
  
  if (!prop_data) {
    return <div>No blog data available.</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      {/* Title */}
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", textAlign: "center" }}>
        {prop_data.title}
      </h1>

      {/* Image */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={backend_api+prop_data.image.url}
          alt={prop_data.title}
          style={{
            width: "100%",
            maxHeight: "400px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Details */}
      <div style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
        <p>{prop_data['detail']?.root?.children?.[0]?.children?.[0]?.text}</p>
      </div>
    </div>
  );
};
