import type { Translations } from '../i18n/fr';
import Header from './Header';
import Hr from './Hr';

type HomePageProps = {
  translations: Translations;
};

export default function HomePage({ translations }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-start">
      <Header translations={translations} />
      
      {/* Hero Section */}
      <section className="w-full px-[222px] py-[120px] flex flex-col gap-10 items-start justify-center max-w-[1440px] mx-auto">
        <h1 
          className="font-title text-[64px] font-bold text-primary leading-normal tracking-[1.28px] max-w-[996px]"
        >
          {translations.hero.title}
        </h1>
        <p 
          className="font-body text-[28px] font-medium text-accent leading-normal max-w-[996px]"
        >
          {translations.hero.intro}
        </p>
        <p 
          className="font-body text-[28px] font-medium text-primary leading-normal max-w-[996px]"
        >
          {translations.hero.mission}
        </p>
      </section>

      {/* Approach Section */}
      <section id="approach" className="w-full bg-white px-[222px] pb-[120px] flex flex-col gap-12 items-center justify-center max-w-[1440px] mx-auto">
        <div className="flex gap-3 items-center w-full">
          <div className="w-4 h-4 rotate-45 bg-accent rounded-sm" />
          <p className="font-title text-base font-semibold text-accent uppercase">
            {translations.approach.title}
          </p>
        </div>
        <div className="flex gap-6 items-start w-full">
          {translations.approach.principles.map((principle, index) => (
            <div key={index} className="flex-1 flex flex-col gap-8 items-start">
              <Hr />
              <div className="flex flex-col gap-3 items-start text-base text-primary">
                <p className="font-body font-bold whitespace-pre-wrap">
                  {principle.title}
                </p>
                <p className="font-body font-normal">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="w-full px-[222px] pb-[120px] flex flex-col gap-12 items-start justify-center max-w-[1440px] mx-auto">
        <div className="flex gap-3 items-center w-full">
          <div className="w-3 h-3 rotate-45 bg-accent rounded-sm" />
          <p className="font-title text-base font-semibold text-accent uppercase">
            {translations.offers.title}
          </p>
        </div>
        <p className="font-body text-xl font-medium text-primary max-w-[996px]">
          {translations.offers.intro}
        </p>
        <div className="flex gap-6 items-start w-full">
          {translations.offers.list.map((offer, index) => (
            <div key={index} className="flex-1 flex flex-col gap-6 items-start">
              <Hr />
              <div className="flex flex-col gap-4">
                <p className="font-body text-sm font-semibold text-accent">
                  Offre {offer.number}
                </p>
                <p className="font-title text-2xl font-bold text-primary">
                  {offer.title}
                </p>
              </div>
              <p className="font-body text-base font-normal text-primary leading-normal">
                {offer.description}
              </p>
              <div className="flex flex-wrap gap-2 items-start w-full">
                {offer.tags.map((tag, tagIndex) => (
                  <div key={tagIndex} className="bg-background-grey px-[14px] py-[10px] rounded-md">
                    <p className="font-body text-sm font-normal text-primary">
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="font-body text-xl font-medium text-primary max-w-[996px]">
          {translations.offers.outro}
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full px-[222px] pb-[120px] flex flex-col gap-[120px] items-start justify-center max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-16 items-start w-full">
          <h2 className="font-title text-[40px] font-bold text-black tracking-[0.8px]">
            {translations.projects.title}
          </h2>
          <div className="flex flex-col gap-8 items-start justify-center w-full">
            <div className="bg-background-light h-[360px] rounded-md w-full flex items-center justify-center">
              <p className="text-primary-light">Projets à venir</p>
            </div>
            <div className="flex flex-col gap-6 items-start w-full">
              <p className="font-title text-2xl font-bold text-primary">
                Exemple de projet
              </p>
              <p className="font-body text-base font-normal text-primary">
                Description du projet
              </p>
            </div>
          </div>
          <button className="font-body text-base font-medium text-primary-light cursor-pointer">
            {translations.projects.cta}
          </button>
          <Hr />
        </div>
      </section>

      {/* Collective Section */}
      <section id="collective" className="w-full px-[222px] pb-[120px] pt-[90px] flex flex-col gap-12 items-start justify-center max-w-[1440px] mx-auto">
        <div className="flex gap-3 items-center w-full">
          <div className="w-3 h-3 rotate-45 bg-accent rounded-sm" />
          <p className="font-title text-base font-semibold text-accent uppercase">
            {translations.collective.title}
          </p>
        </div>
        <div className="flex gap-12 items-start w-full">
          {translations.collective.members.map((member, index) => (
            <div key={index} className="flex-1 flex flex-col gap-6 items-start">
              <div className="w-[108px] h-[108px] bg-background-light rounded-md" />
              <div className="flex flex-col gap-2 items-start text-primary">
                <p className="font-body text-base font-bold">
                  {member.name}
                </p>
                <p className="font-body text-xl font-medium">
                  {member.role}
                </p>
              </div>
              <p className="font-body text-base font-normal text-primary leading-normal whitespace-pre-wrap">
                {member.bio}
              </p>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-1 items-center cursor-pointer"
              >
                <span className="font-body text-base font-medium text-primary-light underline">
                  Linkedin
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full px-[222px] pb-[120px] flex flex-col gap-12 items-start justify-center max-w-[1440px] mx-auto">
        <div className="flex gap-3 items-center w-full">
          <div className="w-3 h-3 rotate-45 bg-accent rounded-sm" />
          <p className="font-title text-base font-semibold text-accent uppercase">
            {translations.skills.title}
          </p>
        </div>
        <div className="flex gap-12 items-start w-full">
          {translations.skills.categories.map((category, index) => (
            <div key={index} className="flex-1 flex flex-col gap-6 items-start">
              <Hr />
              <h3 className="font-title text-2xl font-bold text-primary">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4 text-base text-primary">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <p className="font-body font-bold text-accent mb-1">
                      {item.title}
                    </p>
                    <p className="font-body font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full px-[222px] pb-[120px]  flex flex-col gap-[90px] items-start justify-center max-w-[1440px] mx-auto">
        <Hr />
        <div className="flex flex-col gap-2 items-start">
          <p className="font-body text-base font-bold text-primary">
            {translations.contact.title}
          </p>
          <p className="font-body text-[28px] font-medium text-accent">
            {translations.contact.emailLabel}{' '}
            <a 
              href={`mailto:${translations.contact.email}`}
              className="underline cursor-pointer"
            >
              {translations.contact.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
