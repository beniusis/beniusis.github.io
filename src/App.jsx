import { About, Header, Projects } from './components';

export const App = () => {
  return (
    <main className="max-w-2xl p-8 m-auto gap-10 flex flex-col min-h-screen font-inter justify-center items-center">
      <Header />
      <About />
      <Projects />
    </main>
  );
};

export default App;
