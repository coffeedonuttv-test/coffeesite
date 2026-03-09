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
    
    // Remove widgets created by react-grab or same-runtime scripts
    const removeScriptWidgets = () => {
      // Look for elements that might be created by these scripts
      const possibleWidgets = document.querySelectorAll('[data-grab], [data-same], [class*="grab"], [class*="same"], [id*="grab"], [id*="same"]');
      possibleWidgets.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const buttons = htmlEl.querySelectorAll('button, [role="button"]');
        if (buttons.length >= 3) {
          htmlEl.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;';
          htmlEl.setAttribute('data-hidden-widget', 'true');
        }
      });
    };
    
    // Hide floating widget/icon boxes that appear above content
    const hideFloatingWidgets = () => {
      // Find all elements that could be widgets
      const allElements = document.querySelectorAll('div, span, section, aside, nav');
      
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (!htmlEl || !htmlEl.parentElement) return;
        if (htmlEl.getAttribute('data-hidden-widget') === 'true') return; // Already hidden
        
        const style = htmlEl.getAttribute('style') || '';
        const className = htmlEl.className || '';
        const id = htmlEl.id || '';
        const textContent = (htmlEl.textContent || '').toLowerCase();
        const title = htmlEl.getAttribute('title') || '';
        const ariaLabel = htmlEl.getAttribute('aria-label') || '';
        
        // Check for multiple icons/buttons (the widget has 4 icons)
        const buttons = htmlEl.querySelectorAll('button, [role="button"], a[href], [onclick]');
        const icons = htmlEl.querySelectorAll('svg, [class*="icon"], [class*="Icon"], img[src*="icon"]');
        const hasMultipleIcons = (buttons.length + icons.length) >= 3; // 3-4 icons in the box
        
        // Check for specific hover text patterns
        const hasSelectElement = title.toLowerCase().includes('select element') || 
                                ariaLabel.toLowerCase().includes('select element') ||
                                textContent.includes('ctrl+c') ||
                                textContent.includes('select element');
        const hasMoreActions = title.toLowerCase().includes('more actions') || 
                             ariaLabel.toLowerCase().includes('more actions');
        const hasDisable = title.toLowerCase().includes('disable') || 
                          ariaLabel.toLowerCase().includes('disable') ||
                          textContent.includes('disable');
        
        // Check for toggle switch
        const hasToggle = htmlEl.querySelector('input[type="checkbox"], [role="switch"], [class*="toggle"], [class*="switch"]') !== null;
        
        // Check if it's a box with background
        const computedStyle = window.getComputedStyle(htmlEl);
        const bgColor = computedStyle.backgroundColor.toLowerCase();
        const hasBackground = bgColor !== 'rgba(0, 0, 0, 0)' && 
                             bgColor !== 'transparent' &&
                             !bgColor.includes('rgba(0, 0, 0');
        
        // Check position
        const isFixed = style.includes('position: fixed') || style.includes('position:fixed');
        const isAbsolute = style.includes('position: absolute') || style.includes('position:absolute');
        const rect = htmlEl.getBoundingClientRect();
        const isNearTop = rect.top < 400 && rect.top > -100 && rect.left < window.innerWidth;
        const isSmallBox = rect.width < 300 && rect.height < 200; // Small widget box
        
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
                              htmlEl.closest('[class*="header"]') !== null ||
                              htmlEl.closest('[class*="coffee"]') !== null;
        
        // Hide if it matches the 4-icon widget pattern
        if (!isOurComponent && (
          // Pattern 1: Has multiple icons (3-4) and is a small box near top
          (hasMultipleIcons && isSmallBox && isNearTop && (isFixed || isAbsolute)) ||
          // Pattern 2: Has "Select element" text/tooltip
          (hasSelectElement && hasMultipleIcons) ||
          // Pattern 3: Has "more actions" and toggle
          (hasMoreActions && hasToggle) ||
          // Pattern 4: Has disable toggle and multiple icons
          (hasDisable && hasToggle && hasMultipleIcons) ||
          // Pattern 5: Small box with 3-4 buttons/icons near header
          (hasMultipleIcons && isSmallBox && isNearTop && hasBackground && buttons.length >= 2)
        )) {
          // Remove it completely
          htmlEl.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; height: 0 !important; width: 0 !important; overflow: hidden !important; position: absolute !important; left: -9999px !important;';
          htmlEl.setAttribute('data-hidden-widget', 'true');
          
          // Also try to remove from DOM if it's not needed
          try {
            if (htmlEl.parentElement && !htmlEl.closest('body')?.contains(htmlEl)) {
              // Only remove if it's safe
            }
          } catch (e) {
            // Ignore errors
          }
        }
      });
    };
    
    // More aggressive widget removal - check for specific patterns
    const removeWidgetBox = () => {
      // Look for ALL elements and check their tooltips (case-insensitive)
      const allElements = document.querySelectorAll('*');
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.getAttribute('data-hidden-widget') === 'true') return;
        
        const title = (htmlEl.getAttribute('title') || '').toLowerCase();
        const ariaLabel = (htmlEl.getAttribute('aria-label') || '').toLowerCase();
        const textContent = (htmlEl.textContent || '').toLowerCase();
        
        // Check for widget tooltip patterns
        const hasSelectElement = title.includes('select element') || 
                                ariaLabel.includes('select element') ||
                                textContent.includes('ctrl+c') ||
                                textContent.includes('select element');
        const hasMoreActions = title.includes('more actions') || 
                             ariaLabel.includes('more actions');
        const hasDisable = title.includes('disable') || 
                          ariaLabel.includes('disable');
        
        if (hasSelectElement || hasMoreActions || hasDisable) {
          // Find the parent container that holds all the icons
          let parent = htmlEl.parentElement;
          let depth = 0;
          while (parent && depth < 5) {
            const buttons = parent.querySelectorAll('button, [role="button"], a[href], [onclick], input[type="checkbox"]');
            if (buttons.length >= 3 && buttons.length <= 5) {
              // Found the widget container - hide it completely
              (parent as HTMLElement).style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; height: 0 !important; width: 0 !important; position: absolute !important; left: -9999px !important;';
              (parent as HTMLElement).setAttribute('data-hidden-widget', 'true');
              break;
            }
            parent = parent.parentElement;
            depth++;
          }
          
          // Also hide the element itself
          htmlEl.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important;';
          htmlEl.setAttribute('data-hidden-widget', 'true');
        }
      });
      
      // Look for containers with exactly 4 buttons/icons
      const containers = document.querySelectorAll('div, nav, section');
      containers.forEach((container) => {
        const htmlEl = container as HTMLElement;
        if (htmlEl.getAttribute('data-hidden-widget') === 'true') return;
        
        const children = htmlEl.children;
        const interactiveElements = htmlEl.querySelectorAll('button, [role="button"], a, [onclick], input[type="checkbox"]');
        
        // If container has exactly 3-4 interactive children and is small
        if (interactiveElements.length >= 3 && interactiveElements.length <= 5) {
          const rect = htmlEl.getBoundingClientRect();
          const isSmall = rect.width < 250 && rect.height < 150;
          const isNearTop = rect.top < 400 && rect.top > 0;
          const style = window.getComputedStyle(htmlEl);
          const hasBg = style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent';
          
          // Check if any child has the tooltip patterns
          const hasWidgetTooltips = Array.from(interactiveElements).some((el) => {
            const title = (el as HTMLElement).getAttribute('title') || '';
            const ariaLabel = (el as HTMLElement).getAttribute('aria-label') || '';
            return title.toLowerCase().includes('select element') ||
                   title.toLowerCase().includes('more actions') ||
                   title.toLowerCase().includes('disable') ||
                   ariaLabel.toLowerCase().includes('select element') ||
                   ariaLabel.toLowerCase().includes('more actions') ||
                   ariaLabel.toLowerCase().includes('disable');
          });
          
          if (isSmall && isNearTop && (hasBg || hasWidgetTooltips)) {
            const isOurComponent = htmlEl.closest('header') !== null ||
                                   htmlEl.className.includes('coffee') ||
                                   htmlEl.className.includes('donut') ||
                                   htmlEl.className.includes('header');
            
            if (!isOurComponent) {
              htmlEl.style.cssText = 'display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; height: 0 !important; width: 0 !important;';
              htmlEl.setAttribute('data-hidden-widget', 'true');
            }
          }
        }
      });
    };
    
    // Run immediately and also after a delay to catch dynamically loaded widgets
    hideFloatingWidgets();
    removeWidgetBox();
    removeScriptWidgets();
    
    // Run multiple times to catch widgets that load at different times
    const runRemoval = () => {
      hideFloatingWidgets();
      removeWidgetBox();
      removeScriptWidgets();
    };
    
    setTimeout(runRemoval, 100);
    setTimeout(runRemoval, 500);
    setTimeout(runRemoval, 1000);
    setTimeout(runRemoval, 2000);
    setTimeout(runRemoval, 3000);
    setTimeout(runRemoval, 5000);
    
    // Also use MutationObserver to catch widgets that load later
    const observer = new MutationObserver(() => {
      hideFloatingWidgets();
      removeWidgetBox();
      removeScriptWidgets();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['style', 'class', 'title', 'aria-label']
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
