import { useState } from 'react';
import { Info, X } from 'lucide-react';

interface ServicePopoverProps {
  title: string;
  overview?: string;
  howWeWork?: string | string[];
  deliverables?: string;
  impact?: string;
  coreAreas?: string[];
  iconColor?: string;
}

export default function ServicePopover({
  title,
  overview,
  howWeWork,
  deliverables,
  impact,
  coreAreas,
  iconColor = 'text-blue-600'
}: ServicePopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block z-[100]">
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className={`ml-2 ${iconColor} hover:opacity-80 transition-colors`}
        aria-label="More information"
      >
        <Info size={20} />
      </button>

      {isOpen && (
        <div
          className="absolute z-[9999] w-96 bg-white rounded-xl shadow-2xl border-2 border-blue-100 p-6 left-0 top-8"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{ position: 'absolute' }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>

          <h4 className="text-xl font-bold text-gray-900 mb-4 pr-6">{title}</h4>

          {overview && (
            <div className="mb-4">
              <h5 className="text-sm font-bold text-blue-600 uppercase mb-2">Overview</h5>
              <p className="text-sm text-gray-700 leading-relaxed">{overview}</p>
            </div>
          )}

          {coreAreas && coreAreas.length > 0 && (
            <div className="mb-4">
              <h5 className="text-sm font-bold text-blue-600 uppercase mb-2">Core Focus Areas</h5>
              <ul className="space-y-1">
                {coreAreas.map((area, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="mr-2">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {howWeWork && (
            <div className="mb-4">
              <h5 className="text-sm font-bold text-blue-600 uppercase mb-2">How We Work</h5>
              {typeof howWeWork === 'string' ? (
                <p className="text-sm text-gray-700 leading-relaxed">{howWeWork}</p>
              ) : (
                <ul className="space-y-1">
                  {howWeWork.map((item, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {deliverables && (
            <div className="mb-4">
              <h5 className="text-sm font-bold text-blue-600 uppercase mb-2">Deliverables</h5>
              <p className="text-sm text-gray-700 leading-relaxed">{deliverables}</p>
            </div>
          )}

          {impact && (
            <div>
              <h5 className="text-sm font-bold text-blue-600 uppercase mb-2">Impact</h5>
              <p className="text-sm text-gray-700 leading-relaxed">{impact}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
