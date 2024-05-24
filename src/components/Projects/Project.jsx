export const Project = ({ data }) => {
  return (
    <a
      className="flex flex-col justify-center items-start text-zinc-900 cursor-pointer hover:text-opacity-70 hover:-translate-x-1 hover:-translate-y-1 xs:text-sm text-base w-full"
      href={data.url}
      target="_blank"
    >
      <h3 className="font-bold">{data.title}</h3>
      <p className="font-normal">{data.description}</p>
    </a>
  );
};
