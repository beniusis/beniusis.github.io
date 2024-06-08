export const Link = ({ children, href }) => {
  return (
    <a
      className="font-bold underline underline-offset-2 hover:opacity-70"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
