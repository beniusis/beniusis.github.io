export const Link = ({ children, href }) => {
  return (
    <a
      className="underline font-bold underline-offset-2 hover:opacity-70"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
