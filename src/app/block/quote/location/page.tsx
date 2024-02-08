import LocationImage from "@/components/locationImage";
import react from "react";
import hydrant from "@/components/assets/hydrant_QUOTE.jpg";


export default function QuoteLocation() {
    return (
        <LocationImage codeBlock={`"`} blockKey="quote" images={[hydrant]} />
    )
}