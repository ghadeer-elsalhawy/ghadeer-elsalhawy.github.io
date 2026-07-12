export function Tag({ label }: { label: string }) {
  return <span className="tag-stamp">{label}</span>;
}

export function TagList({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <Tag key={t} label={t} />
      ))}
    </div>
  );
}
