export const Heading = ({ children }) => {
  return (
    <h2 className="font-bold  underline underline-offset-8 decoration-2 select-none  bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 max-w-fit px-1 rounded">
      {children}
    </h2>
  );
};
