import React from 'react';
import {
    SynthesizingIcon,
    SynthesisSuccessIcon,
    CloseIcon2,
    SynthesisFailedIcon,
} from '@/components/svg';

const Status = {
    synthesising: {
        title: 'Sythesising',
        desc: 'Please be patient and wait',
        icon: <SynthesizingIcon />,
        iconDesc: <div className="text-[#D7C19A]">Loading</div>,
    },
    success: {
        title: 'Sythesising',
        desc: 'Congratulations',
        icon: <SynthesisSuccessIcon />,
        iconDesc: <div className="text-[#81FFAB]">Completed</div>,
    },
    fail: {
        title: 'Synthesis failed',
        desc: 'Sorry',
        icon: <SynthesisFailedIcon />,
        iconDesc: <div className="text-[#FF0000]">terminate</div>,
    },
};

export default function Synthesis({
    status = 'synthesising',
    visible,
    onClose,
}: {
    status: 'synthesising' | 'success' | 'fail';
    visible: boolean;
    onClose: () => void;
}) {
    const { title, desc, icon, iconDesc } = Status[status];
    return (
        <div
            className={`fixed top-0 right-0 bottom-0 left-10 transition-all ${
                visible ? 'z-10' : '-z-50'
            } flex justify-center items-center`}
        >
            <div
                className={`bg-[#030812] border border-[#D7C19A] rounded-lg pb-14 lg:w-[556px] transition-opacity ease-linear duration-150 ${
                    visible ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="flex justify-end p-4">
                    <div onClick={onClose}>
                        <CloseIcon2 />
                    </div>
                </div>
                <div className="text-2xl">{title}</div>
                <div>{desc}</div>
                <div className="flex justify-center mt-14 mb-5">{icon}</div>
                <div>{iconDesc}</div>
            </div>
        </div>
    );
}
