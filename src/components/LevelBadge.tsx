import React from 'react'

interface Props {
    level: string;
}

const LevelBadge = ({ level } : Props) => {
    if (level == 'EASY') {
        return (
            <div className="flex justify-between">
                <div className="bg-green-600 px-2.5 py-0.5 rounded-md">
                    <span className="text-xs text-white">ง่าย</span>
                </div>
            </div>
        )
    } else if (level == 'MEDIUM') {
        return (
            <div className="flex justify-between">
                <div className="bg-yellow-600 px-2.5 py-0.5 rounded-md">
                    <span className="text-xs text-white">ปานกลาง</span>
                </div>
            </div>
        )
    } else if (level == 'HARD') {
        return (
            <div className="flex justify-between">
                <div className="bg-red-700 px-2.5 py-0.5 rounded-md">
                    <span className="text-xs text-white">ยาก</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex justify-between">
                <div className="bg-gray-700 px-2.5 py-0.5 rounded-md">
                    <span className="text-xs text-white">N/A</span>
                </div>
            </div>
        )
    }
}

export default LevelBadge