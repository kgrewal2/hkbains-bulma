import Image from "next/image";

export default function Footer({title, description, imagePath}) {
    return (
        <div className="flex flex-row justify-center gap-24 pt-8 pb-8">
            <a href="https://www.behance.net/harmanbains">Behance</a>
            <a href="https://www.linkedin.com/in/harmanbains13/">LinkedIn</a>
        </div>
    )
}