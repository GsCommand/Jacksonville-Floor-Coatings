type ImagePlaceholderProps = {
  label?: string;
  detail?: string;
  className?: string;
};

export function ImagePlaceholder({ className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder ${className}`.trim()} aria-hidden="true">
      <span className="image-placeholder-grain" />
      <span className="image-placeholder-line image-placeholder-line-one" />
      <span className="image-placeholder-line image-placeholder-line-two" />
    </div>
  );
}
