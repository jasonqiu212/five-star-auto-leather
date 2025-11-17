import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

interface WhatsAppAccount {
  name: string;
  number: string;
  whatsappUrl: string;
}

const accounts: WhatsAppAccount[] = [
  {
    name: 'Alvin',
    number: '+65 9172 9570',
    whatsappUrl: 'https://api.whatsapp.com/send?phone=6591729570',
  },
  {
    name: 'Joy',
    number: '+65 8790 9677',
    whatsappUrl: 'https://api.whatsapp.com/send?phone=6587909677',
  },
];

export default function WhatsAppAffix() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const popoverRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const togglePopover = () => {
    setIsOpen(!isOpen);
    setShowHint(false);
  };

  const handleAccountClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed right-4 bottom-4 z-1000">
      {showHint && !isOpen && (
        <div className="absolute right-14 bottom-2 rounded-lg bg-white px-3 py-2 text-sm whitespace-nowrap shadow-md/20">
          Need help? Chat with us!
        </div>
      )}

      <button
        ref={toggleButtonRef}
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-green-500 p-4 text-white shadow-md/20 transition-all duration-300 hover:bg-green-600 hover:shadow-lg/20"
        onClick={togglePopover}
        aria-label="Chat with us on WhatsApp"
        type="button"
      >
        <Icon
          icon="mdi:whatsapp"
          className={`absolute h-7 w-7 transition-all duration-300 ${
            isOpen ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
          }`}
        />
        <Icon
          icon="mdi:close"
          className={`absolute h-7 w-7 transition-all duration-300 ${
            isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
          }`}
        />
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          className="whatsapp-popover-slide-up absolute right-0 bottom-16 min-w-[250px] rounded-lg bg-white p-4 shadow-xl/25"
        >
          <h3 className="mb-1">Chat with us on WhatsApp!</h3>
          <div className="flex flex-col gap-1">
            {accounts.map((account) => (
              <a
                key={account.number}
                href={account.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-2 no-underline transition-colors hover:bg-gray-100"
                onClick={handleAccountClick}
              >
                <Icon icon="mdi:whatsapp" className="h-8 w-8 text-green-500" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{account.name}</p>
                  <p className="text-sm text-gray-600">{account.number}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
