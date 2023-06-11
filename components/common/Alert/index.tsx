import { ErrorIcon } from '@/components/svg';

export default function Alert({ title }: { title: string }) {
    return (
        <div className="flex justify-center my-6">
            <div className="bg-[#030812] border border-[#d7c19a] px-4 py-2 rounded-lg flex justify-center items-center">
                <ErrorIcon />
                <span className="ml-2">{title}</span>
            </div>
        </div>
    );
}
