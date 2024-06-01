export const Header = () => {
  return (
    <header className="w-full flex justify-between items-center">
      <h1 className="sr-only">portfolio of beniusis</h1>

      <a
        className="xs:text-2xl text-[2rem] text-zinc-900 hover:text-indigo-400 font-extralight"
        href="/"
      >
        beniusis
      </a>

      <div className="flex justify-center items-center gap-2">
        <a
          className="w-8 h-8 xs:w-7 xs:h-7"
          href="https://github.com/beniusis"
          target="_blank"
          aria-label="github"
        >
          <svg
            className="w-full h-full fill-zinc-900 hover:fill-indigo-400"
            viewBox="0 0 24 24"
          >
            <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
          </svg>
        </a>

        <a
          className="w-8 h-8 xs:w-7 xs:h-7"
          href="https://www.linkedin.com/in/rbeniusis"
          target="_blank"
          aria-label="linkedin"
        >
          <svg
            className="w-full h-full fill-zinc-900 hover:fill-indigo-400"
            viewBox="0 0 24 24"
          >
            <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};
