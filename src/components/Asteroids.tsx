import { useEffect, useState } from "react";
import { fetchAsteroids } from "../services/SpaceTravelApi";
import moment from 'moment';
import { Asteroid } from "./Asteroid";
import { NearEarthObject } from "../models/NsoModel";

export function Asteroids() {
    const [asteroidTraffic, setAsteroidTraffic] = useState<any[]>([]);

    const today = moment().format('YYYY-MM-DD');


    useEffect(() => {
    fetchAsteroids(moment().format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')).then((response) => setAsteroidTraffic(response.near_earth_objects[today]));
      
  }, []);

  return (
      <div>
          <h2>Near Earth Asteroid Information</h2>

          {asteroidTraffic.map((elem, i) => <Asteroid key={i} elem={elem}></Asteroid>)}

    </div>
  );
}
