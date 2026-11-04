import { useEffect, useRef } from 'react';

function SkillChip({ name, definition, isActive, onToggle }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) onToggle(null);
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') onToggle(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isActive, onToggle]);

  return (
    <li className="skill-chip-wrap" ref={wrapRef}>
      <button
        type="button"
        className={`skill-chip${isActive ? ' active' : ''}`}
        aria-expanded={isActive}
        onClick={() => onToggle(isActive ? null : name)}
      >
        {name}
      </button>

      {isActive && definition && (
        <div className="skill-definition" role="dialog">
          <div className="skill-definition-title">{name}</div>
          <p className="skill-definition-text">{definition.text}</p>
          {definition.url && (
            <a
              className="skill-definition-link"
              href={definition.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more →
            </a>
          )}
        </div>
      )}
    </li>
  );
}

export default SkillChip;
