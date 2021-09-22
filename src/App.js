import React, { useState, useEffect } from "react";
import Table from "./Table";
import CardFan from "./CardFan";
import Bubbles from "./Bubbles";
import "./styles.css";
import Background from "./Background";
import Text from "./Text";
import LoadingSpinner from "./LoadingSpinner";

export default function App() {
  const [state, setState] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const res = await fetch(
      "https://fetch-hiring.s3.amazonaws.com/hiring.json"
    );
    const data = await res.json();
    let newData = data.filter((item, index) => {
      return item.name !== null && item.name !== "";
    });
    newData = newData.sort((a, b) => {
      if (a.listId === b.listId) {
        return a.name.replace("Item ", "") - b.name.replace("Item ", ""); // WANT TO POINT OUT I COULD SORT BY ID TO GET THE SAME RESULT WITHOUT USING .REPLACE(), BUT THE INSTRUCTIONS CLEARLY STATE: "Sort the results first by "listId" then by "name" when displaying."
      }
      return a.listId - b.listId;
    });

    console.log(`data:${data.length}`);
    console.log(`newData:${newData.length}`);
    setTimeout(() => {
      setLoaded(true);
    }, 1500); /// timer is there for demonstrating lading animation features
    setState([...newData]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loaded) {
    return (
      <div className="App">
        <Text text="HIRE ME" />
        <Background />
        <Bubbles />
        <CardFan />
        <Table data={state} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <LoadingSpinner />
      </div>
    );
  }
}
