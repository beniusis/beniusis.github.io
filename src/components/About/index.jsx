import { Heading } from '@/components';
import { Link } from './Link';

const CURRENTLY_LEARNING = ['TypeScript', 'Vue', 'Vitest', 'Playwright'];

export const About = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-6">
      <Heading>About</Heading>

      <div className="flex flex-col gap-4 text-balance text-left text-base font-normal text-zinc-900 xs:text-sm">
        <p>
          A curious and ambitious software developer with a passion for web development and a focus
          on front-end development. I am committed to building user-friendly, effective, and
          maintainable web solutions and continuously improving my knowledge in this ever-evolving
          field.
        </p>
        <p>
          I am enrolled in the course of Web Development at{' '}
          <Link href="https://www.turingcollege.com">Turing College</Link>.
          <br />
          Currently learning: {CURRENTLY_LEARNING.join(', ')}.
        </p>
      </div>
    </div>
  );
};
