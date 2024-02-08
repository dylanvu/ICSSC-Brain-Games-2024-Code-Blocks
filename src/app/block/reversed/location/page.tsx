import LocationImage from "@/components/locationImage";
import react from "react";
import dump from "@/components/assets/dumpster_REVERSED.jpg";


export default function ReversedLocation() {
    return (
        <LocationImage codeBlock={`reversed`} blockKey="reversed" images={[dump]} />
    )
}