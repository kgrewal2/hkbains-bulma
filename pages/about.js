import Image from "next/image";
import YogaPicture from "../public/undraw-yoga.svg"
import ChildPicture from '../public/undraw-child.svg';
import WorkPicture from '../public/undraw-work.svg';
import GraduatePicture from '../public/undraw-graduate.svg';
import ConceptCard from "../components/ConceptCard";
import HobbyCard from "../components/HobbyCard";
import BookshelfPicture from "../public/undraw_bookshelves.svg";
import CameraPicture from "../public/undraw-camera.svg";

export default function About() {
    return (<>
        <div className="px-80">
            <div className="flex flex-row-reverse gap-24 py-24 h-screen">
                <div className="flex flex-col justify-center gap-4 basis-2/3">
                    <span className="text-6xl text-orange-700">About Me</span>
                    <span className="text-2xl text-justify">
                    Currently pursuing a Master&apos;s degree in User Experience at Arizona State University.
                    I love working in an interdisciplinary team and creating a better experience by researching what the users want.
                </span>
                </div>
                <div className="basis-1/2 rounded-full flex content-center">
                    <Image src={YogaPicture} alt="Avatar"/>
                </div>
            </div>
            <div className="flex flex-col gap-8 h-screen">
                <span className="text-3xl ">Pursuit of Learning</span>
                <div className="grid grid-cols-3 gap-8">
                    <ConceptCard title="Undergrad" imagePath={ChildPicture}
                                 description="Equipped and helped me to have an eye for design. Colors, typography, layout, and the whole package."/>
                    <ConceptCard title="Work" imagePath={WorkPicture}
                                 description="Working at a web and app development company taught me a lot about how to understand users, solve problems and build great products."/>
                    <ConceptCard title="Graduate" imagePath={GraduatePicture}
                                 description={"Helped me dive into the User research of the design process in depth while creating semester-wide research projects on various topics."}/>
                </div>
            </div>
            <div className="flex flex-col gap-8 mb-24 mt-40">
                <span className="text-3xl ">When I am not working</span>
                <div className="grid grid-cols-2 gap-8">
                    <HobbyCard title="Try finding me in the library" imagePath={BookshelfPicture}
                               description="Here are my top picks: ASD. ASD. aSD"/>
                    <HobbyCard title="Camera+Harman is a match made in heaven" imagePath={CameraPicture}
                               description="Sky, Squirrels, Skin. You name it. I've clicked it."/>
                </div>
            </div>
        </div>
    </>)
}
