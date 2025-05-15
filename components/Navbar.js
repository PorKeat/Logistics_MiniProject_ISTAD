
// const getPageHref = (page) => {
//   return page === "index.html" ? "./index.html" : `../page/${page}`;
// };

// const NavbarComponent = () => {
//   const page = [
//     "index.html",
//     "services.html",
//     "about.html",
//     "contact.html",
//     "blog.html",
//   ];

//   const navLinks = page
//     .map((page) => {
//       const label = page
//         .replace(".html", "")
//         .replace("index", "Home")
//         .replace(/^\w/, (c) => c.toUpperCase());
//       return `
//         <li class="relative group">
//           <a href="${getPageHref(page)}"
//              class="hover:text-[#fcb621] transition">
//             ${label}
//           </a>
//         </li>`;
//     })
//     .join("");

//   const mobileLinks = page
//     .map((page) => {
//       const label = page
//         .replace(".html", "")
//         .replace("index", "Home")
//         .replace(/^\w/, (c) => c.toUpperCase());
//       return `
//         <li>
//           <a href="${getPageHref(page)}" class="block py-2 hover:text-[#fcb621] transition">
//             ${label}
//           </a>
//         </li>`;
//     })
//     .join("");

//   return `
//     <nav class="fixed top-0 left-0 w-full z-50 bg-[#1e33472e] backdrop-blur-md border-b border-white/10">
//       <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//         <!-- Logo -->
//         <div class="flex items-center gap-2">
//           <img
//             src="https://cdn.prod.website-files.com/5dd7315081d3e97c21e69c0f/5dd7c04c4e896a0ca249c4cd_logo-white.png"
//             alt="Logo"
//             class="h-8"
//           >
//         </div>

//         <!-- Center Nav - Desktop -->
//         <ul class="hidden md:flex justify-end w-full max-w-5xl gap-7 text-white text-lg font-normal">
//           ${navLinks}
//         </ul>

//         <!-- Login Button - Desktop -->
//         <div class="hidden md:block">
//           <a href="#" class="bg-[#fcb621] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#e0a80dc9] transition">
//             Login
//           </a>
//         </div>

//         <!-- Hamburger Menu - Mobile -->
//         <div class="md:hidden">
//           <button id="menu-toggle" class="text-white focus:outline-none" aria-label="Toggle Menu">
//             <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <!-- Mobile Dropdown Menu -->
//       <div id="mobile-menu" class="md:hidden px-6 pb-4 text-white text-lg font-normal bg-black/60 backdrop-blur-sm hidden transition-all duration-300">
//         <ul class="flex flex-col gap-2">
//           ${mobileLinks}
//           <li>
//             <a href="#" class="block py-2 mt-2 text-center bg-[#fcb621] text-white rounded-md hover:bg-[#e0a80dc9] transition">
//               Login
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   `;
// };

// const NavbarScript = () => {
//   document.addEventListener("DOMContentLoaded", () => {
//     const navbarContainer = document.getElementById("navbar");
//     if (!navbarContainer) return;

//     navbarContainer.innerHTML = NavbarComponent();

//     const menuToggle = document.getElementById("menu-toggle");
//     const mobileMenu = document.getElementById("mobile-menu");

//     menuToggle?.addEventListener("click", () => {
//       mobileMenu?.classList.toggle("hidden");
//     });
//   });
// };

// export default NavbarScript;
const getPageHref = (page) => {
  return page === "index.html" ? "./index.html" : `./page/${page}`;
};

const NavbarComponent = () => {
  const pages = [
    "index.html",
    "services.html",
    "about.html",
    "contact.html",
    "blog.html",
  ];

  const navLinks = pages
    .map((page) => {
      const label = page
        .replace(".html", "")
        .replace("index", "Home")
        .replace(/^\w/, (c) => c.toUpperCase());
      return `
        <li class="relative group">
          <a href="${getPageHref(page)}"
             class="hover:text-[#fcb621] transition">
            ${label}
          </a>
        </li>`;
    })
    .join("");

  const mobileLinks = pages
    .map((page) => {
      const label = page
        .replace(".html", "")
        .replace("index", "Home")
        .replace(/^\w/, (c) => c.toUpperCase());
      return `
        <li>
          <a href="${getPageHref(
            page
          )}" class="block py-2 hover:text-[#fcb621] transition">
            ${label}
          </a>
        </li>`;
    })
    .join("");

  return `
    <nav class="fixed top-0 left-0 w-full z-50 bg-[#1e33472e] backdrop-blur-md border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img 
            src="https://cdn.prod.website-files.com/5dd7315081d3e97c21e69c0f/5dd7c04c4e896a0ca249c4cd_logo-white.png" 
            alt="Logo" 
            class="h-8"
          >
        </div>

        <!-- Center Nav - Desktop -->
        <ul class="hidden md:flex justify-end w-full max-w-5xl gap-7 text-white text-lg font-normal">
          ${navLinks}
        </ul>

        <!-- Login Button - Desktop -->
        <div class="hidden md:block">
          <a href="#" class="bg-[#fcb621] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#e0a80dc9] transition">
            Login
          </a>
        </div>

        <!-- Hamburger Menu - Mobile -->
        <div class="md:hidden">
          <button id="menu-toggle" class="text-white focus:outline-none" aria-label="Toggle Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="md:hidden px-6 pb-4 text-white text-lg font-normal bg-black/60 backdrop-blur-sm hidden transition-all duration-300">
        <ul class="flex flex-col gap-2">
          ${mobileLinks}
          <li>
            <a href="#" class="block py-2 mt-2 text-center bg-[#fcb621] text-white rounded-md hover:bg-[#e0a80dc9] transition">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `;
};

const NavbarScript = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar");
    if (!navbarContainer) return;

    navbarContainer.innerHTML = NavbarComponent();

    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle?.addEventListener("click", () => {
      mobileMenu?.classList.toggle("hidden");
    });
  });
};

export default NavbarScript;
