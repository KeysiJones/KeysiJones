function SectionTitle({ title, className }) {
  return (
    <h2 className={`my-16 text-5xl font-bold text-center text-black-800 sm:text-6xl lg:text-[60px] lg:my-28 ${className}`}>
      {title}
    </h2>
  );
}

export { SectionTitle };
