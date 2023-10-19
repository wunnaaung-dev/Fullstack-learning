import React from "react";
import useFetch from "../../hooks/useFetch";

export default function Featured() {
  const {
    data, loading, error
  } = useFetch("/api/hotels")
  console.log("Fetched data", data)
  return <div>Featured</div>;
}
