interface ArtworkProps {
    name: string,
    desc: string,
    image: string,
    rowSpan?: number,
    colSpan?: number
}

export function Artwork({ name, image, desc, rowSpan = 1, colSpan = 1 }: ArtworkProps) {
    return (
        <div
            className={`bg-neutral-100 p-4 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300`}
            style={{
                gridRow: `span ${rowSpan}`,
                gridColumn: `span ${colSpan}`
            }}
        >
            <img src={`artwork/${image}`} alt={name} className="w-full h-full object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">{desc}</p>
        </div>
    );
}