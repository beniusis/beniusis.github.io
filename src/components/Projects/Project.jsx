export const Project = ({ data }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <a
        className="flex flex-col justify-center items-start text-zinc-900 cursor-pointer hover:text-opacity-70 hover:-translate-x-1 hover:-translate-y-1 xs:text-sm text-base max-w-[80%] w-full"
        href={data.url}
        target="_blank"
      >
        <h3 className="font-bold">{data.title}</h3>
        <p className="font-normal">{data.description}</p>
      </a>

      {data.repo && (
        <a
          className="w-8 h-8 xs:w-7 xs:h-7 cursor-pointer"
          href={data.repo}
          target="_blank"
          title={`go to ${data.title} repository`}
          aria-label={`${data.title} repository`}
        >
          <svg
            className="w-full h-full fill-zinc-900 hover:fill-zinc-700"
            viewBox="0 0 24 24"
          >
            <path d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822"></path>
          </svg>
        </a>
      )}
    </div>
  );
};
