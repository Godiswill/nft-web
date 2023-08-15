export default function Divider({ vertical = false, className = '' }) {
    return (
        <div
            className={`bg-[#848484] ${
                vertical ? 'w-px mx-4' : 'px-4 h-px my-4 lg:mx-auto'
            } ${className}`}
        ></div>
    );
}
