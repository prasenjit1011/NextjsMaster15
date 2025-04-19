// components/Portal.tsx
'use client'

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
  selector?: string;
}

export default function Portal({ children, selector = '#portal-root' }: PortalProps) {
  const [mounted, setMounted] = useState(false);
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    const el = document.querySelector(selector);
    setPortalElement(el);
    setMounted(true);
  }, [selector]);

  return mounted && portalElement
    ? createPortal(children, portalElement)
    : null;
}
