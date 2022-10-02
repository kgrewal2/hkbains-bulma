import Image from "next/image";

export default function ProjectCard({title, description, imagePath}) {
    return (
        <div className="rounded-xl shadow-lg bg-orange-200">
            <figure className="aspect-square p-4"><Image src={imagePath} alt="Album"/></figure>
            <div className="flex flex-col gap-2 px-4 py-4">
                <span className="text-2xl">{title}</span>
                <span className="text-lg text-zinc-500">{description}</span>
            </div>
        </div>
    )
}