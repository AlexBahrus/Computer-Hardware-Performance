import "./DetailPart.css";
import { useNavigate} from 'react-router-dom'

export default function DetailPart({ model, title, img, detail, link }) {
    const history = useNavigate()
  return (
    
    <div className="showdetailPart">
      <img src={img} alt="" className="photoPartd" />
      <div className="detailPartmain">
        <div >
          <p id="modelPartd">{model}</p>
          <p id="titlePartd">{title}</p>
          <p id="detailPartd">{detail}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button id="MoreButton">Learn More</button>
          </a>
        </div>
      </div>
      <button id="BackButton" onClick={()=>history(-1)}>Go Back</button>
    </div>

  );
}