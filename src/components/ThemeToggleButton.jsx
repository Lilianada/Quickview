import React, { useState } from 'react';

const ThemeToggleButton = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');

  const themeConfig = {
    default: {
      background: '#242424',
      primaryText: '#FFFFFF',
      secondaryText: '#D1D1D6',
      accent: '#F5BF6A',
      card: '#2E2E2E'
    },
    light: {
      background: '#FCFCFC',
      primaryText: '#18181B',
      secondaryText: '#52525B',
      accent: '#D94A1F',
      card: '#F8F8F8'
    },
    violet: {
      background: '#F8F8F8',
      primaryText: '#5B21B6',
      secondaryText: '#7C3AED',
      accent: '#491C96',
      card: '#EDE9FE'
    },
    cyan: {
      background: '#ECFEFF',
      primaryText: '#0E7090',
      secondaryText: '#06AED4',
      accent: '#164E63',
      card: '#CFFAFE'
    },
    fushia: {
      background: '#FBE8FF',
      primaryText: '#86198F',
      secondaryText: '#D946EF',
      accent: '#701A75',
      card: '#FAE8FF'
    },
    green: {
      background: '#D3F8DF',
      primaryText: '#047857',
      secondaryText: '#10B981',
      accent: '#065F46',
      card: '#D1FAE5'
    },
    darkBlue: {
      background: '#D1E0FF',
      primaryText: '#1E40AF',
      secondaryText: '#3B82F6',
      accent: '#1E3A8A',
      card: '#DBEAFE'
    },
    darkOrange: {
      background: '#FFE6D5',
      primaryText: '#9A3412',
      secondaryText: '#F97316',
      accent: '#7C2D12',
      card: '#FFEDD5'
    },
  };

  const themes = Object.keys(themeConfig);

  const handleDotClick = (theme) => {
    setCurrentTheme(theme);
    const event = new CustomEvent('themeChange', { 
      detail: { theme }
    });
    window.dispatchEvent(event);
  };

  return (
    <div 
      className={`fixed bottom-4 right-4 lg:relative ${expanded ? 'h-72':'h-12'} w-12 transition-all duration-300`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={()=> setExpanded(false)}
    >
      <div
        className={` w-full h-full rounded-full transition-all duration-300`}
        style={{ backgroundColor: `${themeConfig[currentTheme].primaryText}20` }}
      >
        {expanded && (
          <div className="absolute inset-0 flex flex-col items-center justify-around py-2 mt-12">
            {themes.map((theme, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(theme)}
                className="w-1.5 h-1.5 rounded-full cursor-pointer transition-all duration-300"
                style={{ 
                  backgroundColor: themeConfig[currentTheme].primaryText,
                  opacity: theme === currentTheme ? 0.5 : 0.2
                }}
              />
            ))}
          </div>
        )}
        
        <div className=" w-12 h-12 cursor-pointer">
          <div 
            className="rounded-full flex items-center justify-center"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div 
                className="absolute w-2.5 h-2.5 rounded-full border-2"
                style={{ borderColor: themeConfig[currentTheme].secondaryText }}
              />
              
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-[1.5px] h-2.5"
                  style={{
                    backgroundColor: themeConfig[currentTheme].secondaryText,
                    transform: `rotate(${i * 45}deg) translateY(-13px)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggleButton;