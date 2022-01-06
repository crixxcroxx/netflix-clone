import "./carouselBox.scss";

export default function CarouselBox(props) {

  return (
    <div className="carousel-box">
      {props.children}
    </div>
  );
}