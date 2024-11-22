export default function LineNumbers({ count }: { count: number }) {
    return (
      <div className="select-none pr-4 text-right text-gray-600 font-mono text-sm py-4 ml-2">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="leading-6">
            {i + 1}
          </div>
        ))}
      </div>
    );
  }