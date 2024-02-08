import LocationImage from "@/components/locationImage";
import react from "react";
import pole from "@/components/assets/random_pole_PAREN.jpg";
import pole2 from "@/components/assets/random_pole_PAREN_1.jpg";


export default function ParenLocation() {
    return (
        <LocationImage codeBlock={`)`} blockKey="paren" images={[pole, pole2]} />
    )
}