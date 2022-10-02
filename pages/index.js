import Image from "next/image";
import profilePicture from "../public/undraw-profile-pic.svg"
import ProjectCard from "../components/ProjectCard";
import OwlPicture from '../public/undraw-owl.svg'
import RevampPicture from '../public/undraw-revamp.svg'

export default function Home() {
    return (<>
        <div className="px-80">
            <div className="flex flex-row-reverse gap-24 py-36 h-screen">
                <div className="basis-1/3 bg-orange-200 rounded-full shadow-xl">
                    <Image src={profilePicture} alt="Avatar"/>
                </div>
                <div className="flex flex-col justify-center gap-4 basis-2/3">
                    <span className="text-4xl">Hey! 👋🏻</span>
                    <span className="text-6xl text-orange-700">I am Harman</span>
                    <span className="text-2xl text-justify">
                    I am a UX Designer who creates simple but effective designs that are easy to understand and
                        operate by putting real people at the center of the UX process.
                </span>
                </div>
            </div>
            <div className="flex flex-col gap-8 mb-24">
                <span className="text-3xl ">Work</span>
                <div className="grid grid-cols-3 gap-8">
                    <ProjectCard title="Burrowing Owl Conservation Project" imagePath={OwlPicture}
                                 description={"Understanding the pain points of the volunteers involved in rescuing the burrowing owls in the Arizona region"}/>
                    <ProjectCard title="Revamping ASU Fitness Website" imagePath={RevampPicture}
                                 description="Revamping the website with user research!"/>
                </div>
            </div>
        </div>
    </>)
}
