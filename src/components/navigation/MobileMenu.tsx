import React from 'react';
import { X } from 'lucide-react';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-deep-black bg-opacity-95 z-50 md:hidden">
      <div className="flex justify-end p-6">
        <button onClick={onClose}>
          <X className="h-6 w-6 text-pure-white" />
        </button>
      </div>
      <NavLinks className="flex flex-col items-center space-y-6 text-xl" />
    </div>
  );
};

export default MobileMenu;