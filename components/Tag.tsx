type TagProps = {
  children: string;
  active?: boolean;
  onClick?: () => void;
};

export function Tag({ children, active = false, onClick }: TagProps) {
  const className = active
    ? 'focus-ring rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white'
    : 'focus-ring rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-brand-dark ring-1 ring-inset ring-emerald-200';

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return <span className={className}>{children}</span>;
}
