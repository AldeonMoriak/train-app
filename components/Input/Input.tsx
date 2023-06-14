export default function Input({
  label,
  onChange,
  value,
  textarea = false,
  placeholder = "",
}: {
  label: string;
  textarea?: boolean;
  placeholder?: string;
  onChange?:
    | React.ChangeEventHandler<HTMLTextAreaElement>
    | React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
}) {
  return (
    <label title="name" className="relative">
      {textarea ? (
        <textarea
          rows={3}
          value={value}
          onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
          placeholder={placeholder}
          name={label}
          className="rounded p-2 block border-2 w-full h-20 peer"
        />
      ) : (
        <input
          value={value}
          type="text"
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
          placeholder={placeholder}
          name={label}
          className="rounded text-sm text-gray-900 px-2 block border-2 w-full h-10 peer"
        />
      )}
      <span className="text-base first-letter:uppercase text-gray-900 bg-white absolute left-2 top-1 scale-75 -translate-y-4 origin-[0] duration-300 transform peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:top-1.5 peer-placeholder-shown:text-gray-500 peer-focus:text-gray-900">
        {label}
      </span>
    </label>
  );
}
