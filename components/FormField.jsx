import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const CONTROL = 'rounded-[3px] border-hairline bg-white px-[15px] py-[13px] text-[14.5px] h-auto focus-visible:border-brand focus-visible:ring-0';

export function Field({ id, label, textarea = false, ...props }) {
  const Control = textarea ? Textarea : Input;
  return (
    <div className="mb-3.5">
      <Label htmlFor={id} className="mb-1.5 block text-[12.5px] font-bold tracking-[.05em] text-ink-soft uppercase">
        {label}
      </Label>
      <Control id={id} className={`${CONTROL} ${textarea ? 'min-h-[120px] resize-y' : ''}`} {...props} />
    </div>
  );
}

export function FieldRow({ children }) {
  return <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">{children}</div>;
}
