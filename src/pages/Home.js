import { Fragment } from "react";
import CardSmall from "../component/CardSmall"; // Pastikan path ini sesuai dengan struktur foldermu
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Mengimpor file CSS

export default function Home() {
  const part = [
    {
      title: "CPU",
      desc: "Central Processing Unit",
      img: "https://st2.depositphotos.com/2068621/7074/v/450/depositphotos_70742951-stock-illustration-mini-cpu-simple-icon-on.jpg",
    },
    {
      title: "GPU",
      desc: "Graphics Processing Unit",
      img: "https://st3.depositphotos.com/1020091/13820/v/450/depositphotos_138207084-stock-illustration-gpu-icon-illustration.jpg",
    },
    {
      title: "RAM",
      desc: "Random Access Memory",
      img: "https://st4.depositphotos.com/18664664/22484/v/450/depositphotos_224840206-stock-illustration-random-access-memory-icon-trendy.jpg",
    },
    {
      title: "SSD",
      desc: "Solid State Drive",
      img: "https://st4.depositphotos.com/38837296/39706/v/450/depositphotos_397061134-stock-illustration-ssd-icon-vector-hardware-concept.jpg",
    },
    {
      title: "HDD",
      desc: "Hard Disk Drives",
      img: "https://st3.depositphotos.com/14953852/34507/v/450/depositphotos_345079510-stock-illustration-hard-disk-drive-icon-vector.jpg",
    },
    {
      title: "USB",
      desc: "Universal Serial Bus",
      img: "https://st.depositphotos.com/1062321/4680/v/450/depositphotos_46801573-stock-illustration-usb-icon.jpg",
    },
  ];
  
  let navigate = useNavigate();
  
  return (
    <>
      <p id="home">All Parts</p>
      <div className="card-container"> {/* Container untuk kartu */}
        {part.map((item, index) => (
          <Fragment key={index}> {/* Menggunakan index sebagai key */}
            <CardSmall
              className="card-small" // Menambahkan class untuk styling
              title={item.title}
              img={item.img}
              desc={item.desc}
              onClick={() => navigate(`${item.title}`)}
            />
          </Fragment>
        ))}
      </div>
    </>
  );
}
