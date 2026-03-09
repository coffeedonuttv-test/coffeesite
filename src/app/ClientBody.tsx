"use client";

import { useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
    
    // Hide floating widget/icon boxes that appear above content
    const hideFloatingWidgets = () => {
      // Find all elements that could be widgets
      const allElements = document.querySelectorAll('div, span, section, aside');
      
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (!htmlEl || !htmlEl.parentElement) return;
        
        const style = htmlEl.getAttribute('style') || '';
        const className = htmlEl.className || '';
        const id = htmlEl.id || '';
        const textContent = (htmlEl.textContent || '').toLowerCase();
        
        // Check for toggle switch patterns
        const hasToggle = htmlEl.querySelector('input[type="checkbox"], [role="switch"], [class*="toggle"], [class*="switch"]') !== null;
        const hasDisableText = textContent.includes('disable');
        
        // Check if it's a white box
        const computedStyle = window.getComputedStyle(htmlEl);
        const bgColor = computedStyle.backgroundColor.toLowerCase();
        const isWhiteBox = bgColor.includes('rgb(255') || 
                          bgColor.includes('rgba(255') ||
                          bgColor === 'white' ||
                          bgColor === '#ffffff' ||
                          bgColor.includes('rgb(255, 255, 255)');
        
        // Check if it has icons or buttons
        const hasIcons = htmlEl.querySelector('svg, [class*="icon"], [class*="Icon"], button') !== null;
        
        // Check position - could be fixed, absolute, or relative near top
        const isFixed = style.includes('position: fixed') || style.includes('position:fixed');
        const isAbsolute = style.includes('position: absolute') || style.includes('position:absolute');
        const rect = htmlEl.getBoundingClientRect();
        const isNearTop = rect.top < 300 && rect.top > -50 && rect.left < window.innerWidth; // Near header area
        
        // Exclude our known components
        const isOurComponent = className.includes('coffee') || 
                              className.includes('donut') || 
                              className.includes('toast') ||
                              className.includes('cursor') ||
                              className.includes('header') ||
                              className.includes('motion') ||
                              className.includes('framer') ||
                              id.includes('coffee') ||
                              id.includes('donut') ||
                              id.includes('header') ||
                              htmlEl.closest('header') !== null ||
                              htmlEl.closest('[class*="header"]') !== null;
        
        // Hide if it matches widget pattern (toggle + white box + near top) and is not our component
        if (!isOurComponent && (
          (hasToggle && isWhiteBox) ||
          (hasToggle && hasDisableText) ||
          (isWhiteBox && hasIcons && (isFixed || isAbsolute) && isNearTop) ||
          (hasDisableText && hasToggle && isNearTop) ||
          (hasToggle && textContent.includes('disable') && isNearTop && rect.width < 200)
        )) {
          htmlEl.style.cssText += 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; height: 0 !important; width: 0 !important; overflow: hidden !important;';
          htmlEl.setAttribute('data-hidden-widget', 'true');
        }
      });
    };
    
    // Run immediately and also after a delay to catch dynamically loaded widgets
    hideFloatingWidgets();
    setTimeout(hideFloatingWidgets, 1000);
    setTimeout(hideFloatingWidgets, 3000);
    
    // Also use MutationObserver to catch widgets that load later
    const observer = new MutationObserver(hideFloatingWidgets);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class']
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="antialiased">
      <CustomCursor />
      {children}
    </div>
  );
}
