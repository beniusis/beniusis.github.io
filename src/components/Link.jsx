export const Link = ({ children, href }) => {
  return (
    <a
      className="underline font-bold underline-offset-2 hover:text-zinc-700"
      href={href}
    >
      {children}
    </a>
  );
};
