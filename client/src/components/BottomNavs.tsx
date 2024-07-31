import {
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useRef } from "react";

import AppStore from '@/assets/Icons/AppStore.png';
import Calendar from '@/assets/Icons/Calendar.png';
import Finder from '@/assets/Icons/Finder.png';
import Freeform from '@/assets/Icons/Freeform.png';
import Mail from '@/assets/Icons/Mail.png';
import Maps from '@/assets/Icons/Maps.png';
import Messages from '@/assets/Icons/Messages.png';
import Notes from '@/assets/Icons/Notes.png';
import Photos from '@/assets/Icons/Photos.png';
import Reminders from '@/assets/Icons/Reminders.png';
import Settings from '@/assets/Icons/Settings.png';

interface IconData {
    src: string;
    alt: string;
}

const iconData: IconData[] = [
    { src: AppStore, alt: "App Store" },
    { src: Calendar, alt: "Calendar" },
    { src: Finder, alt: "Finder" },
    { src: Freeform, alt: "Freeform" },
    { src: Mail, alt: "Mail" },
    { src: Maps, alt: "Maps" },
    { src: Messages, alt: "Messages" },
    { src: Notes, alt: "Notes" },
    { src: Photos, alt: "Photos" },
    { src: Reminders, alt: "Reminders" },
    { src: Settings, alt: "Settings" },
];

const Dock: React.FC = () => {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-0 w-full flex justify-center items-center pb-[1rem]"
        >
            <motion.div
                className="px-[.6rem] h-[4.6rem] rounded-[1.4rem] backdrop-blur-[.3rem] bg-[#ffffff2f] border-[1px] border-gray-400 shadow-[0_15px_13px_-3px_rgba(0,0,0,0.3)] flex justify-center items-center gap-[.3rem]"
            >
                {iconData.map((icon, i) => (
                    <AppIcon key={i} src={icon.src} alt={icon.alt} mouseX={mouseX} />
                ))}
            </motion.div>
        </motion.div>
    );
};

interface AppIconProps {
    src: string;
    alt: string;
    mouseX: MotionValue<number>;
}

const AppIcon: React.FC<AppIconProps> = ({ src, alt, mouseX }) => {
    const ref = useRef<HTMLImageElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [70, 120, 70]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    const ySync = useTransform(distance, [-150, 0, 150], [0, -20, 0]);
    const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.img
            ref={ref}
            style={{ width, y }}
            src={src}
            alt={alt}
            className="cursor-pointer"
        />
    );
};

export default Dock;
