import "./CardSmallParts.css";

export default function CardSmallParts({ model, title, img, rank, onClick}) {
  return (
    <div className="cardPart" onClick={onClick}>
      <img src={img} alt="" className="photoPart" />
      <div className="descriptionPart">
        <div>
          <p id="modelPart">{model}</p>
          <p id="titlePart">{title}</p>
          <p id="rankPart">{rank}</p>
        </div>
      </div>
    </div>
  );
}