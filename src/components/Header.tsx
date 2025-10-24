import type { Translations } from '../i18n/fr';

type HeaderProps = {
  translations: Translations;
};

export default function Header({ translations }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stroke-default w-full">
      <div className="flex items-center justify-between max-w-[1440px] w-full mx-auto">
        <div className="flex items-center justify-center gap-2 px-6 py-6 w-[200px]">
          <a href="#top" className="font-title font-bold text-base text-primary">
            {translations.site.title}
          </a>
        </div>
        <nav className="flex items-center gap-12 px-12 cursor-pointer">
          <a
            href="#projects"
            className="text-base text-primary-light hover:text-accent transition-colors font-medium font-body"
          >
            {translations.nav.projects}
          </a>
          <a
            href="#collective"
            className="text-base text-primary-light hover:text-accent transition-colors font-medium font-body"
          >
            {translations.nav.collective}
          </a>
          <a
            href="#contact"
            className="text-base text-primary-light hover:text-accent transition-colors font-medium font-body"
          >
            {translations.nav.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}

