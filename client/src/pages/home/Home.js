import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzY0MWRiODBmNTM0YmZiYmU1MTk5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDQ1NTE4NiwiZXhwIjoxNjQwODg3MTg2fQ.8If0R-MQUmpY61XrhSLUUrr5b9XhK16u-rMpi2xRqQ8",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;

/*
{
            headers:{
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzY0MWRiODBmNTM0YmZiYmU1MTk5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDQ1NTE4NiwiZXhwIjoxNjQwODg3MTg2fQ.8If0R-MQUmpY61XrhSLUUrr5b9XhK16u-rMpi2xRqQ8"
            },
          }

*/
