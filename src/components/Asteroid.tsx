import { NearEarthObject } from "../models/NsoModel";

export function Asteroid(props: { elem: any }) {
    
    return (
        <div>
            <ul>
                <li>Near Earth Object Name:{props.elem.name}</li>
                <li>Potentially Hazardous Asteroid:{props.elem.is_potentially_hazardous_asteroid === true ? `Yes` : `No`}</li>
                <li>Estimated diameter(feet): Between {props.elem.estimated_diameter.feet.estimated_diameter_min.toFixed(0)} and {props.elem.estimated_diameter.feet.estimated_diameter_max.toFixed(0)}</li>
                <li>Miss distance (miles):{parseInt(props.elem.close_approach_data[0].miss_distance.miles).toFixed(0)}</li>
                <li>Close approach date:{props.elem.close_approach_data[0].close_approach_date}</li>
                <li>Relative Velocity (MPH):{parseInt(props.elem.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(0)}</li>
            </ul>
        </div>
    );
}