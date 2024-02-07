import LocationImage from "@/components/locationImage";
import react from "react";
import bench from "@/components/assets/random_bench_OUT.jpg";

export default function OutLocation() {
    return (
        <LocationImage codeBlock={`out`} blockKey="out" images={[bench]} />
    )
}