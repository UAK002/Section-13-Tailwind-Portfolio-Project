import heroImg from './assets/hero.svg';

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      {/* <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 item-center gap-8"> */}
      <div className="align-element px-8 grid md:grid-cols-2 item-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm John</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide ">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            {/* <FaGithubSquare className="h8 w8 text-slate-500 hover:text-black duration-300"></FaGithubSquare> */}
            <FaGithubSquare className="h8 w8 text-slate-500 hover:text-black duration-300" />
            <FaLinkedin className="h8 w8 text-slate-500 hover:text-black duration-300" />
            <FaTwitterSquare className="h8 w8 text-slate-500 hover:text-black duration-300" />
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
