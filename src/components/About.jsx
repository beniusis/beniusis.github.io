import { Heading } from './Heading';
import { Link } from './Link';

const CURRENTLY_LEARNING = ['TypeScript', 'Vue', 'Vitest', 'Playwright'];

export const About = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-10">
      <Heading>About</Heading>

      <div className="flex flex-col gap-4 font-normal text-base xs:text-sm text-zinc-900 text-left">
        <p>
          A curious and constantly evolving Frontend Developer focused on
          delivering user-friendly, aesthetically pleasing, creative, effective,
          and maintainable web solutions.
          <br />I am passionate about Web Development and dedicated to
          continuously improving my knowledge in this ever-evolving field.
        </p>
        <p>
          I am currently enrolled in the course of Web Development at{' '}
          <Link href="https://www.turingcollege.com">Turing College</Link>.
          <br />
          Looking for new opportunities and challenges to grow and further
          develop my skills.
        </p>
        <p>Currently learning: {CURRENTLY_LEARNING.join(', ')}.</p>
      </div>
    </div>
  );
};
