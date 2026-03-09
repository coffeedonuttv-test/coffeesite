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
      // Find all fixed position elements at the bottom
      const allElements = document.querySelectorAll('div[style*="position: fixed"], div[style*="position:fixed"]');
      
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const style = htmlEl.getAttribute('style') || '';
        const className = htmlEl.className || '';
        const id = htmlEl.id || '';
        
        // Check if it's a floating widget (has icons, buttons, or is a white box)
        const hasIcons = htmlEl.querySelectorAll('svg, [class*="icon"], [class*="Icon"]').length > 0;
        const isWhiteBox = window.getComputedStyle(htmlEl).backgroundColor.includes('rgb(255') || 
                          window.getComputedStyle(htmlEl).backgroundColor.includes('rgba(255');
        const isBottomFixed = style.includes('bottom') && (style.includes('position: fixed') || style.includes('position:fixed'));
        
        // Exclude our known components
        const isOurComponent = className.includes('coffee') || 
                              className.includes('donut') || 
                              className.includes('toast') ||
                              className.includes('cursor') ||
                              id.includes('coffee') ||
                              id.includes('donut');
        
        // Hide if it matches widget pattern and is not our component
        if (isBottomFixed && hasIcons && !isOurComponent) {
          htmlEl.style.display = 'none';
          htmlEl.style.visibility = 'hidden';
          htmlEl.style.opacity = '0';
          htmlEl.style.pointerEvents = 'none';
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
