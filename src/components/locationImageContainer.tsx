import react from "react";
import Image, { StaticImageData } from "next/image";
import "@/styles/image.css";

export default function LocationImageContainer({ image }: { image: StaticImageData }) {

    return (
        <div className="image-container">
            <Image src={image} alt={"Location Image"} fill style={{ "objectFit": "contain" }} />
        </div>
    )
}