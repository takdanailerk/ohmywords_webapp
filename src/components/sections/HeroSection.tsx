import { Button } from "../ui/button"
import { TypingAnimation } from "../ui/typing-animation"

const HeroSection = () => {
    return (
        <section className="w-full min-h-screen grid grid-cols-2 py-12">
            <div className="flex flex-col justify-center lg:col-span-1 xs:col-span-2">
                <TypingAnimation
                    className="text-5xl font-bold xs:text-center lg:text-start text-blue-900"
                    words={["เรียน", "เล่น", "ทบทวน"]}
                    loop
                />
                <p className="mt-8 text-[#333333] xs:text-center lg:text-start">
                    Oh My Words ตัวช่วยในการจำคำศัพท์ของคุณที่จะทำให้คุณลืมการจำศัพท์แบบเก่าไปอย่างสิ้นเชิง ผ่านการเรียนแบบ Flashcard
                    หรือ Gamification สุดเจ๋งและทันสมัย
                </p>
                <div className="mt-8 flex xs:justify-center lg:justify-start">
                    <Button size='lg' className="px-5 py-1.5 cursor-pointer bg-amber-900">เริ่มต้นใช้งาน</Button>
                </div>
            </div>
            <div className="lg:col-span-1 xs:col-span-2">

            </div>
        </section>
    )
}

export default HeroSection