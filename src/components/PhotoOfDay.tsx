import { useEffect, useState } from "react";
import { fetchPhoto } from "../services/SpaceTravelApi";

export function PhotoOfDay() {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [caption, setCaption] = useState<string>("");

  useEffect(() => {
    fetchPhoto().then((data) => setImgSrc(data.url));
    fetchPhoto().then((data) => setCaption(data.explanation));
  }, []);

  return (
    <div className="frame">
      <figure>
        <img src={imgSrc} alt="photo_of_day_nasa" />
        <figcaption className="caption">
          <h2
            style={{
              color: "rgba(152, 0, 109)",
              textDecoration: "underline",
              fontSize: "1.5rem",
              margin: "7px 0 7px 0",
            }}
          >
            Caption
          </h2>{" "}
          {caption}
        </figcaption>
      </figure>
    </div>
  );
}
