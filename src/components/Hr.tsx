type HrProps = {
  className?: string;
};

export default function Hr({ className }: HrProps) {
  return (
    <hr
      aria-hidden="true"
      className={`w-full border-0 border-t-[3px] border-dotted border-accent ${className ?? ''}`}
    />
  );
}


