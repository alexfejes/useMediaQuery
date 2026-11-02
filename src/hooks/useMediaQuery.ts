// FIX: Create a useMediaQuery hook so components become aware of the viewport.
// It uses window.matchMedia to evaluate a CSS media query from JavaScript,
// subscribes to the MediaQueryList 'change' event so React re-renders the
// moment the window crosses a breakpoint, and removes the listener in the
// effect cleanup so nothing leaks on unmount or when the query changes.
// Uncomment everything below (select it, then Ctrl + /).

// import { useEffect, useState } from 'react'
//
// function getMatches(query: string): boolean {
//   // Guard for non-browser environments (SSR, tests without a DOM).
//   if (typeof window === 'undefined') return false
//   return window.matchMedia(query).matches
// }
//
// export function useMediaQuery(query: string): boolean {
//   // Read the real value on first render so there's no desktop -> mobile flash.
//   const [matches, setMatches] = useState(() => getMatches(query))
//
//   useEffect(() => {
//     const mediaQueryList = window.matchMedia(query)
//     const handleChange = () => setMatches(mediaQueryList.matches)
//
//     // Re-sync in case the query string changed since the last render.
//     handleChange()
//     mediaQueryList.addEventListener('change', handleChange)
//
//     // Cleanup: remove the listener on unmount or when the query changes,
//     // so stale listeners don't pile up and update unmounted components.
//     return () => mediaQueryList.removeEventListener('change', handleChange)
//   }, [query])
//
//   return matches
// }
