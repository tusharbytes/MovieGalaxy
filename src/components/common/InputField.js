function InputField({ label, type, value, onChange }) {
  return (
    <div className="flex flex-col space-y-2 text-left">
      <label className="mb-1 text-sm font-medium text-white">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="p-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-red-400"
      />
    </div>
  );
}

export default InputField;
