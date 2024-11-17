import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";
import DetailPart from "../component/DetailPart";

export default function DetailHDDPart() {
    const { state } = useLocation();


    return (
        <>
        <p id="home">BEST HDD</p> 
        
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