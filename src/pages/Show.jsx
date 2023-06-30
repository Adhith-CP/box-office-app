import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById } from "../api/tvmaze";

const Show = () => {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  console.log(setShowError);

  useEffect(() => {
    // getShowById()

    async function fetchData() {
      // You can await here
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setShowData(error);
      }

      // ...
    }
    fetchData();
  }, [showId]);

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Go show data: {showData.name}</div>;
  }

  return <div>Show page{showId}</div>;
};

export default Show;
