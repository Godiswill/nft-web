import { InfoIcon, ErrorIcon } from '@/components/svg';

const InfoType = {
    info: <InfoIcon />,
    error: <ErrorIcon />,
};

export default function InfoTip({
    title,
    type,
    onClick,
}: {
    title: string;
    type: keyof typeof InfoType;
    onClick?: () => void;
}) {
    return (
        <div className="flex justify-center">
            <div
                className="mb-4 bg-white/[0.15] text-white px-4 py-2 flex items-center rounded cursor-pointer"
                onClick={onClick}
            >
                {InfoType[type]}
                <span className="ml-2">{title}</span>
            </div>
        </div>
    );
}
