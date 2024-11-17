import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import DetailPart from "../component/DetailPart";

export default function DetailSSDPart() {
    const { state } = useLocation();


    return (
        <>
        <p id="home">BEST SSD</p> 
        
          <Fragment key={state.id}>
            <DetailPart
              title={state.brand}
              img={state.img}
              model={state.model}
              link={state.url}
              detail={state.detail}
            />
  
          </Fragment>
      </>
    );
  }