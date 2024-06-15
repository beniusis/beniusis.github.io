export const Heading = ({ children }) => {
  return (
    <h2 className="max-w-fit select-none rounded bg-zinc-900 px-1 font-bold text-zinc-50 underline decoration-2 underline-offset-8">
      {children}
    </h2>
  );
};
