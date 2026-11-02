// FIX: Create a useMediaQuery hook so components know the viewport size.
// matches / setMatches store whether the media query currently matches.
// window.matchMedia(query) evaluates the CSS media query from JavaScript,
// the handler calls setMatches with the new result, and the 'change' event
// listener runs it whenever the window crosses the breakpoint. The cleanup
// removes the listener so nothing leaks when the component unmounts.
// Uncomment everything below (select it, then Ctrl + /).

// import { useEffect, useState } from 'react'
//
// export function useMediaQuery(query) {
//   const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
//
//   useEffect(() => {
//     const mediaQuery = window.matchMedia(query)
//     const handler = () => setMatches(mediaQuery.matches)
//
//     mediaQuery.addEventListener('change', handler)
//     return () => mediaQuery.removeEventListener('change', handler)
//   }, [query])
//
//   return matches
// }
