import { useEffect, useState } from "react";
import { fetchPhoto } from "../services/SpaceTravelApi";

export function PhotoCaption() {
  const [caption, setCaption] = useState<string>("");

  useEffect(() => {
    fetchPhoto().then((data) => setCaption(data.explanation));
  }, []);

  return (
    <div className="caption">
          <p>{caption}</p>
    </div>
  );
}