export default function Divider({ vertical = false, className = '' }) {
    return (
        <div
            className={`bg-[#848484] ${className} ${
                vertical ? 'w-px mx-4' : 'px-4 h-px my-4 lg:w-[1024px] lg:mx-auto'
            }`}
        ></div>
    );
}
