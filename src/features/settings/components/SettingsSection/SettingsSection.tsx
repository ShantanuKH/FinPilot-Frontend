interface Props {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

const SettingsSection = ({
  id,
  title,
  description,
  children,
}: Props) => {
  return (
    <section
      id={id}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-2 text-slate-500">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};

export default SettingsSection;