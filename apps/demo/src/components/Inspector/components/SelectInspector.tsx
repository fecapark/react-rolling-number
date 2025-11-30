interface Props<T extends boolean | string> {
  fields: { label: React.ReactNode; value: T }[];
  onChange: (value: T) => void;
  value: T;
}

export const SelectInspector = <T extends boolean | string>({
  value,
  fields,
  onChange,
}: Props<T>) => {
  return (
    <div className="text-neutralInspector border-neutralInspector flex rounded-sm border">
      {fields.map(({ label, value: fieldValue }) => (
        <div
          className="flex cursor-pointer items-center justify-center px-5 py-2 text-sm"
          key={`${fieldValue}${label}`}
          onClick={() => onChange(fieldValue)}
          style={{
            backgroundColor: value === fieldValue ? '#a19da1' : '',
            color: value === fieldValue ? '#0e0e0f' : '',
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
