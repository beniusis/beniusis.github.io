import { About, Header, Projects } from './components';

export const App = () => {
  return (
    <div className="max-w-2xl min-h-screen p-8 m-auto font-inter selection:bg-zinc-400">
      <Header />
      <main className="flex flex-col justify-center items-center gap-10 mt-10">
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;
