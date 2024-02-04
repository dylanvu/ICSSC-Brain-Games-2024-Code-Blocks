import LocationImage from "@/components/locationImage";
import react from "react";
import above_food_court from "@/components/assets/above_food_court.jpg";
import above_food_court_1 from "@/components/assets/above_food_court_1.jpg";

export default function HelloWorldLocation() {
    return (
        <LocationImage codeBlock={`("Hello-World")`} blockKey="hello-world" images={[above_food_court, above_food_court_1]} />
    )
}