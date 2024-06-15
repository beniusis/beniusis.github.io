import { About, Header, Projects } from './components';

export const App = () => {
  return (
    <div className="m-auto min-h-screen max-w-2xl p-8 selection:bg-zinc-50">
      <Header />
      <main className="mt-10 flex flex-col items-center justify-center gap-10">
        <About />
        <Projects />
      </main>
    </div>
  );
};
