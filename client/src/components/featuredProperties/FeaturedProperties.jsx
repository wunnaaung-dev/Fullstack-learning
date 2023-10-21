import React from "react";
import useFetch from "../../hooks/useFetch";
import './featuredProperties.css'
export default function FeaturedProperties() {
  const { data, loading, error } = useFetch(
    "/api/hotels?featured=true&limit=4"
  );
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data?.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos[0]}
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
