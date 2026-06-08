import LevelBadge from "@/components/LevelBadge";
import { Button } from "@/components/ui/button";
import { VocabCategory } from "@/shared/models";
import Image from "next/image";

type Props = Omit<VocabCategory, "createdAt" | "updatedAt">

const VocabCategoryCard = ({ props } : { props: Props }) => {
    return (
        <div className="border border-slate-400 rounded-xl p-6">
            <LevelBadge level={props.level} />
            <div className="flex justify-center items-center">
                <div className="w-[200px] h-[200px]">
                    <Image src={props.categoryCoverImage ?? ''} alt={props.enCategoryName} width={200} height={200}></Image>
                </div>
            </div>
            <h1 className="text-3xl font-bold mt-2">{props.enCategoryName}</h1>
            <h1 className="text-sm">{props.thCategoryName}</h1>
            <p className="mt-6 text-base text-slate-500 text-sm">จำนวนคำศัพท์ : {props.vocabQty} คำ</p>
            <Button className="w-full mt-6 bg-blue-900 text-white py-4 cursor-pointer">เริ่มเรียน</Button>
        </div>
    )
}

export default VocabCategoryCard