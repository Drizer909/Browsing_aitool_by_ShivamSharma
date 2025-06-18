import React, { useState, useRef, useEffect } from 'react';

export const Select = ({ children, value, onValueChange, ...props }) => {
  return (
    <div {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, onValueChange });
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger = ({ children, className = '', value, onValueChange, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const triggerRef = useRef(null);

  useEffect(() => {
    setSelectedValue(value || '');
  }, [value]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (newValue) => {
    setSelectedValue(newValue);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (triggerRef.current && !triggerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        onClick={handleClick}
        {...props}
      >
        <span>{children || selectedValue || 'Select an option'}</span>
        <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <SelectContent value={selectedValue} onValueChange={handleSelect}>
          {props.children}
        </SelectContent>
      )}
    </div>
  );
};

export const SelectContent = ({ children, className = '', value, onValueChange, ...props }) => {
  return (
    <div className={`absolute top-full z-50 w-full rounded-md border bg-popover text-popover-foreground shadow-md max-h-60 overflow-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export const SelectItem = ({ children, value, className = '', onValueChange, ...props }) => {
  const handleClick = () => {
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div
      className={`relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export const SelectValue = ({ placeholder, ...props }) => {
  return <span {...props}>{placeholder}</span>;
}; 