import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 item-center gap-16">
        <img src={aboutSvg} className="width-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            velit quasi inventore quas recusandae aspernatur aut eius? Eligendi
            repellat ipsum tempore magni ullam, blanditiis odio aspernatur,
            perferendis tenetur veritatis eum!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
