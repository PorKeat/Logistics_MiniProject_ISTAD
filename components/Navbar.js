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
const getPageHref = (page) => {
  return page === "index.html" ? "/src/index.html" : `/src/page/${page}`;
};

const NavbarComponent = () => {
  const pages = [
    "index.html",
    "services.html",
    "about.html",
    "contact.html",
    "blog.html",
  ];

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = pages
    .map((page) => {
      const label = page
        .replace(".html", "")
        .replace("index", "Home")
        .replace(/^\w/, (c) => c.toUpperCase());

      const isActive =
        currentPath === page || (currentPath === "" && page === "index.html");

      return `
        <li class="relative group">
          <a href="${getPageHref(page)}" data-nav-link
             class="hover:text-[#fcb621] transition-colors duration-200 ${
               isActive ? "text-[#fcb621] font-medium" : ""
             }"
             aria-current="${isActive ? "page" : "false"}">
            ${label}
            ${
              isActive
                ? '<span class="absolute left-0 -bottom-1 w-full h-0.5 bg-[#fcb621] transition-all duration-200"></span>'
                : ""
            }
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

      const isActive =
        currentPath === page || (currentPath === "" && page === "index.html");

      return `
        <li>
          <a href="${getPageHref(page)}" data-nav-link 
             class="block py-2 hover:text-[#fcb621] transition-colors duration-200 ${
               isActive ? "text-[#fcb621] font-medium" : ""
             }"
             aria-current="${isActive ? "page" : "false"}">
            ${label}
          </a>
        </li>`;
    })
    .join("");

  return `
    <nav class="fixed top-0 left-0 w-full z-50 bg-[#1e33472e] backdrop-blur-md border-b border-white/10 min-h-[72px]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center gap-2 h-8">
          <a href="${getPageHref("index.html")}" data-nav-link>
            <img 
              src="https://cdn.prod.website-files.com/5dd7315081d3e97c21e69c0f/5dd7c04c4e896a0ca249c4cd_logo-white.png" 
              alt="Logo" 
              class="h-8 w-auto"
              width="32"
              height="32"
            >
          </a>
        </div>

        <!-- Center Nav - Desktop -->
        <ul class="hidden md:flex justify-end w-full px-5  max-w-5xl gap-7 text-white text-lg font-normal">
          ${navLinks}
        </ul>

        <!-- Login Button - Desktop -->
        <div class="hidden md:block">
          <a href="/src/page/login.html" data-nav-link 
             class="bg-[#fcb621] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#e0a80dc9] transition-colors duration-200">
            Login
          </a>
        </div>

        <!-- Hamburger Menu - Mobile -->
        <div class="md:hidden">
          <button id="menu-toggle" class="text-white focus:outline-none focus:ring-2 focus:ring-[#fcb621] rounded" aria-label="Toggle Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" 
           class="md:hidden px-6 pb-4 text-white text-lg font-normal bg-black/60 backdrop-blur-sm hidden transition-all duration-300 origin-top scale-y-0 opacity-0">
        <ul class="flex flex-col gap-2">
          ${mobileLinks}
          <li>
            <a href="/src/page/login.html" data-nav-link 
               class="block py-2 mt-2 text-center bg-[#fcb621] text-white rounded-md hover:bg-[#e0a80dc9] transition-colors duration-200">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `;
};

const NavbarScript = () => {
  // Create navbar container if it doesn't exist
  let navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) {
    navbarContainer = document.createElement("div");
    navbarContainer.id = "navbar";
    document.body.prepend(navbarContainer);
  }

  // Insert navbar HTML
  navbarContainer.innerHTML = NavbarComponent();

  // Mobile menu toggle functionality
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("scale-y-0");
      mobileMenu.classList.toggle("opacity-0");
    });
  }

  // Handle client-side navigation
  const navLinks = document.querySelectorAll("[data-nav-link]");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const href = link.getAttribute("href");
      if (href === window.location.pathname) return; // Prevent re-loading same page
      history.pushState(null, null, href);
      updateActiveLinks();
      loadPageContent(href);
      mobileMenu?.classList.add("hidden", "scale-y-0", "opacity-0");
    });
  });

  // Update active link styles and ARIA attributes
  const updateActiveLinks = () => {
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html";
    navLinks.forEach((link) => {
      const href = link.getAttribute("href").split("/").pop();
      const isActive =
        href === currentPath || (currentPath === "" && href === "index.html");
      if (isActive) {
        link.classList.add("text-[#fcb621]", "font-medium");
        link.setAttribute("aria-current", "page");
        let underline = link.querySelector("span");
        if (!underline && link.parentElement.classList.contains("group")) {
          underline = document.createElement("span");
          underline.className =
            "absolute left-0 -bottom-1 w-full h-0.5 bg-[#fcb621] transition-all duration-200";
          link.appendChild(underline);
        }
      } else {
        link.classList.remove("text-[#fcb621]", "font-medium");
        link.setAttribute("aria-current", "false");
        const underline = link.querySelector("span");
        if (underline) underline.remove();
      }
    });
  };

  // Load page content dynamically
  const loadPageContent = async (href) => {
    try {
      const contentContainer = document.getElementById("main-content");
      if (!contentContainer) {
        console.error("Content container #main-content not found");
        window.location.href = href; // Fallback to full reload
        return;
      }

      const response = await fetch(href);
      if (!response.ok) {
        console.error(`Failed to fetch ${href}: ${response.status}`);
        window.location.href = href; // Fallback to full reload
        return;
      }

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const newContent = doc.querySelector("#main-content")?.innerHTML;

      if (newContent) {
        contentContainer.innerHTML = newContent;
        reinitializeScripts();
      } else {
        console.error("No #main-content found in fetched page");
        window.location.href = href; // Fallback to full reload
      }
    } catch (error) {
      console.error(`Error loading content for ${href}:`, error);
      window.location.href = href; // Fallback to full reload
    }
  };

  // Reinitialize scripts or event listeners for new content
  const reinitializeScripts = () => {
    // Add logic to reattach event listeners or initialize dynamic content
    console.log("Reinitializing scripts");
  };

  // Handle back/forward navigation
  window.addEventListener("popstate", () => {
    updateActiveLinks();
    loadPageContent(window.location.pathname);
  });

  // Initial setup
  updateActiveLinks();
};

export default NavbarScript;
