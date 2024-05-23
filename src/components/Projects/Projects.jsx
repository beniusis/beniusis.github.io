import { Heading } from '../Heading';
import { Project } from './Project';

const PROJECTS = [
  {
    title: 'habitude',
    description: 'A habit-tracking web application',
    url: 'https://beniusis.github.io/habitude'
  },
  {
    title: 'gamefindr',
    description: 'A simple game search web application',
    url: 'https://beniusis.github.io/gamefindr'
  },
  {
    title: 'emojilicious',
    description: 'A simple emoji search web application',
    url: 'https://beniusis.github.io/emojilicious'
  },
  {
    title: 'favepix',
    description:
      'A web application with infinite scroll functionality to search for images',
    url: 'https://beniusis.github.io/favepix'
  },
  {
    title: 'blitztype',
    description: 'A web-based typing speed test application',
    url: 'https://beniusis.github.io/blitztype'
  },
  {
    title: 'diabetr',
    description:
      'A tool that helps to calculate carbohydrates and insulin dosage for a better diabetes management on a daily basis',
    url: 'https://github.com/beniusis/diabetr'
  }
];

export const Projects = () => {
  return (
    <div className="flex flex-col gap-8">
      <Heading>Projects</Heading>

      <div className="flex flex-col justify-center items-start gap-6">
        {PROJECTS.map((project, index) => (
          <Project data={project} key={index} />
        ))}
      </div>
    </div>
  );
};
