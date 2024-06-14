import { Heading } from '@/components';
import { Project } from './Project';

const PROJECTS = [
  {
    title: 'habitude',
    description:
      'a habit-tracking web application that helps you stick to new daily habits (working out, reading, meditating, etc.)',
    url: 'https://beniusis.github.io/habitude',
    repo: 'https://github.com/beniusis/habitude'
  },
  {
    title: 'gamefindr',
    description:
      'a simple web application for searching video games and basic information about them (minimum requirements, release date, etc.)',
    url: 'https://beniusis.github.io/gamefindr',
    repo: 'https://github.com/beniusis/gamefindr'
  },
  {
    title: 'emojilicious',
    description:
      'a simple emoji search web application with the ability to search by keywords and copy emojis to the clipboard',
    url: 'https://beniusis.github.io/emojilicious',
    repo: 'https://github.com/beniusis/emojilicious'
  },
  {
    title: 'favepix',
    description:
      'an infinite scroll-capable web application for viewing the latest images from the Pexels API and saving your favorite ones',
    url: 'https://beniusis.github.io/favepix',
    repo: 'https://github.com/beniusis/favepix'
  },
  {
    title: 'blitztype',
    description: 'a minimalistic typing speed test web application',
    url: 'https://beniusis.github.io/blitztype',
    repo: 'https://github.com/beniusis/blitztype'
  },
  {
    title: 'diabetr',
    description:
      "a command-line interface application that helps with meal's carbohydrates, insulin dose calculation and tracks insulin injections",
    url: 'https://github.com/beniusis/diabetr',
    repo: 'https://github.com/beniusis/diabetr'
  }
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-6">
      <Heading>Projects</Heading>

      <div className="flex flex-col items-start justify-center gap-6">
        {PROJECTS.map((project, index) => (
          <Project data={project} key={index} />
        ))}
      </div>
    </div>
  );
};
