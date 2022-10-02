import Image from "next/image";

export default function HobbyCard({title, description, imagePath}) {
    return (
        <div className="rounded-xl">
            <figure className="aspect-square px-8 mt-4"><Image src={imagePath} alt="Album"/></figure>
            <div className="flex flex-col gap-2 px-4">
                <span className="text-2xl">{title}</span>
                <span className="text-lg text-zinc-500">{description}</span>
            </div>
        </div>
    )
}