import React from 'react';
import { useInView } from '@/hooks/useInView';

interface SectionHeaderProps {
  eyebrow?:     string;
  title:        string;
  titleHighlight?: string;  // word(s) to render in gradient
  subtitle?:    string;
  centered?:    boolean;
  dark?:        boolean;    // for use on dark backgrounds
  className?:   string;
  id?:          string;
  maxWidth?:    string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered   = false,
  dark       = false,
  className  = '',
  id,
  maxWidth   = 'max-w-2xl',
}) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const align = centered ? 'text-center items-center' : 'text-left items-start';

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      id={id}
      className={`flex flex-col ${align} ${className} transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {eyebrow && (
        <span className="eyebrow" aria-label={eyebrow}>
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-display font-bold leading-tight tracking-tight ${
          dark ? 'text-white' : 'text-ieyal-primary'
        }`}
        style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)' }}
      >
        {titleHighlight ? (
          <>
            {title.split(titleHighlight)[0]}
            <span className="gradient-text">{titleHighlight}</span>
            {title.split(titleHighlight)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${maxWidth} ${
            dark ? 'text-blue-100 opacity-80' : 'text-neutral-500'
          }`}
        >
          {subtitle}
        </p>
      )}

      <div className={`section-divider mt-5 ${centered ? 'mx-auto' : 'mr-auto'}`} />
    </div>
  );
};
