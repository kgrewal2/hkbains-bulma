import Link from "next/link";

export default function Navigation() {
    return (<div className="flex justify-between px-80 py-4">
        <div>
            <Link href="/">Harman B</Link>
        </div>
        <div className="flex gap-8">
            <Link href="/about">About</Link>
            <Link href="/art">Art</Link>
            <Link href="#">Work</Link>
            <Link href="mailto:hkbains@asu.edu">Contact</Link>
        </div>
    </div>)
}