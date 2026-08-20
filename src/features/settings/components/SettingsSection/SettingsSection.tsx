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
        rounded-2xl
        border
        border-border
        bg-card
        p-8
        shadow-sm
      "
    >
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground">
          {title}
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      {children}
    </section>
  );
};

export default SettingsSection;