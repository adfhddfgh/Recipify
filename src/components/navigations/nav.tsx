// import { MainNavigation } from "./mainNav";

// export const Navigation = () => {
//   return (
//     <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
//       <ul className="flex flex-col space-x-4">
//         <li>
//           {" "}
//           <MainNavigation />
//         </li>
//       </ul>
//     </nav>
//   );
// };

import { MainNavigation } from "./mainNav";

export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <MainNavigation />
    </nav>
  );
};
