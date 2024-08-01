import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion"
import { useRef } from "react"

import AppStore from '@/assets/Icons/AppStore.png'
import Calendar from '@/assets/Icons/Calendar.png'
import Finder from '@/assets/Icons/Finder.png'
import Freeform from '@/assets/Icons/Freeform.png'
import Mail from '@/assets/Icons/Mail.png'
import Maps from '@/assets/Icons/Maps.png'
import Messages from '@/assets/Icons/Messages.png'
import Notion from '@/assets/Icons/Notion.png'
import Photos from '@/assets/Icons/Photos.png'
import Spotify from '@/assets/Icons/Spotify.png'
import Settings from '@/assets/Icons/Settings.png'
import Instagram from '@/assets/Icons/Instagram.png'
import LinkedIn from '@/assets/Icons/LinkedIn.png'
import Github from '@/assets/Icons/Github.png'

interface IconData {
    src: string
    alt: string
    link?: string
}

const iconData: IconData[] = [
    { src: AppStore, alt: "App Store" },
    { src: Calendar, alt: "Calendar" },
    { src: Finder, alt: "Finder" },
    { src: Freeform, alt: "Freeform" },
    { src: Mail, alt: "Mail" },
    { src: Maps, alt: "Maps" },
    { src: Messages, alt: "Messages" },
    { src: Notion, alt: "Notion" },
    { src: Photos, alt: "Photos" },
    { src: Instagram, alt: "Instagram", link: "https://www.instagram.com/sdevmarc" },
    { src: LinkedIn, alt: "LinkedIn", link: "https://www.linkedin.com/in/sdevmarc" },
    { src: Github, alt: "Github", link: "https://github.com/sdevmarc" },
    { src: Spotify, alt: "Spotify" },
    { src: Settings, alt: "Settings" },
]

const Dock: React.FC = () => {
    const mouseX = useMotionValue(Infinity)

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="relative top-[88%] left-[50%] translate-x-[-50%] px-[.6rem] h-[4.6rem] rounded-[1.4rem] backdrop-blur-[.3rem] bg-[#ffffff2f] border-[1px] border-gray-400 shadow-[0_15px_13px_-3px_rgba(0,0,0,0.3)] flex justify-center items-center gap-[.3rem]"
        >
            {iconData.map((icon, i) => (
                <AppIcon key={i} src={icon.src} alt={icon.alt} mouseX={mouseX} link={icon.link} />
            ))}
        </motion.div>
    )
}

interface AppIconProps {
    src: string
    alt: string
    mouseX: MotionValue<number>
    link?: string
}

const AppIcon: React.FC<AppIconProps> = ({ src, alt, mouseX, link }) => {
    const ref = useRef<HTMLImageElement>(null)

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })

    const widthSync = useTransform(distance, [-150, 0, 150], [70, 120, 70])
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

    const ySync = useTransform(distance, [-150, 0, 150], [0, -20, 0])
    const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 })

    return (
        <motion.img
            ref={ref}
            style={{ width, y }}
            src={src}
            alt={alt}
            className="cursor-pointer"
            onClick={() => link && window.open(link, "_blank")}
        />
    )
}

export default Dock
