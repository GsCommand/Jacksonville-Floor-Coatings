type ImagePlaceholderProps = {
  label: string;
  detail?: string;
  className?: string;
};

export function ImagePlaceholder({ label, detail, className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder ${className}`.trim()} aria-label={`Image needed: ${label}`}>
      <div className="image-placeholder-copy">
        <span>IMAGE NEEDED</span>
        <strong>{label}</strong>
        {detail ? <small>{detail}</small> : null}
      </div>
    </div>
  );
}
