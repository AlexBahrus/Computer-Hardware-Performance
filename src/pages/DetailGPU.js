import { Fragment, useEffect, useState } from "react";
import "./Home.css";
import CardSmallParts from "../component/CardSmallParts";
import HashLoader from "react-spinners/HashLoader";
import { useNavigate } from "react-router-dom";

export default function DetailGPU() {
    const [part, setPart] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      fetch("https://api.jsonbin.io/v3/b/67377bb7e41b4d34e454ea7e?meta=false")
        .then((response) => response.json())
        .then((json) => setPart(json))
        setLoading(true);
    }, []);

    let navigate = useNavigate();

    return (
        <>
        <p id="home">BEST GPU</p>
        <p id="loading"> {loading? loading:<HashLoader size={150} color={"#0024FF"} />} </p>
        {part.map((item, index) => (
          <Fragment key={item.id}>
            <CardSmallParts
              rank={item.rank}
              title={item.brand}
              img={item.img}
              model={item.model}
              link={item.url}
              //onClick={() => window.location.replace(item.url)}
              onClick={() => navigate(`detail`, { state: item })}
            />
            {part.length === index + 1 && <div style={{ marginBottom: 80 }} />}
          </Fragment>
        ))}
      </>
    );
  }