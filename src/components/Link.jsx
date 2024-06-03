export const Link = ({ children, href }) => {
  return (
    <a
      className="underline font-bold underline-offset-2 hover:text-green-500"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
