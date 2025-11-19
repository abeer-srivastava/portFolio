import { div } from "framer-motion/client";
import PixelBlast from "./ui/PixelBlast";

function Background() {
    return (
    <div className="fixed inset-0  bg-[#F6F6F6] h-screen w-screen">
<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <PixelBlast
    variant="square"
    pixelSize={6}
    color="#B8C1FF"
    // color="#A5B4FC"

    // color="#2c3e50"

    patternScale={5}
    patternDensity={1.5}
    pixelSizeJitter={0.2}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    // liquid
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.6}
    edgeFade={0.25}
    transparent
  />
</div>
</div>);
}

export default Background;