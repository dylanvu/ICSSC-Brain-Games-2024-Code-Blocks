import LocationImage from "@/components/locationImage";
import react from "react";
import bell_tower_1 from "@/components/assets/bell_tower_1.jpg";
import bell_tower_2 from "@/components/assets/bell_tower_2.jpg";
import bell_tower_3 from "@/components/assets/bell_tower_3.jpg";
import bell_tower_4 from "@/components/assets/bell_tower_4.jpg";

export default function System() {
    return (
        <LocationImage codeBlock="system" key="system" images={[bell_tower_1, bell_tower_2, bell_tower_3, bell_tower_4]} />
    )
}