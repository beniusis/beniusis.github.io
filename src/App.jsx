import { About, Header, Projects } from './components';

export const App = () => {
  return (
    <main className="max-w-2xl p-4 m-auto gap-8 flex flex-col min-h-screen font-inter justify-center items-center">
      <Header />
      <About />
      <Projects />
    </main>
  );
};

export default App;
