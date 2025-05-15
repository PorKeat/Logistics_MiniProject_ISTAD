const Navbar = () => {
  const currentPath = window.location.pathname;
  const getImageHref = (path) => {
    if (currentPath.includes("pages")) {
      return `../../assets/image/${path}`;
    }
    return `../assets/image/${path}`;
  };

  const getPageHref = (path) => {
    return path === "index.html" ? `/src/index.html` : `/src/pages/${path}`;
  };

  return `
    <section
      id="nav"
      class="flex items-center justify-between py-4 px-6 w-[90%] md:w-[85%] lg:w-[75%] mx-auto text-white fixed left-0 right-0 z-[100] rounded-full transition-all duration-300 top-5 ease-in-out bg-transparent"
    >
      <div>
        <a href="${getPageHref("index.html")}" class="flex items-center gap-2">
          <img src="${getImageHref("logo2.png")}" alt="Logo" class="h-[25px] w-[20px] object-cover" />
          <h1 class="font-black tracking-wide text-lg text-[#f5f5f5]">Sabay<span class="text-[#2A9D8F]">Trip</span></h1>
        </a>
      </div>

      <ul class="hidden lg:flex gap-7 mr-4 font-medium text-[16px]">
        ${["index.html", "services.html", "about.html", "contact.html", "blog.html"]
          .map((page) => {
            const label = page
              .replace(".html", "")
              .replace("index", "Home")
              .replace(/^\w/, (c) => c.toUpperCase());
            return `
              <li class="relative group">
                <a href="${getPageHref(page)}"
                  class="hover:text-[#2A9D8F] after:absolute after:left-0 after:bottom-0 after:w-0 group-hover:after:w-full after:h-[2px] after:bg-[#2A9D8F] after:transition-all after:duration-300">
                  ${label}
                </a>
              </li>`;
          })
          .join("")}
      </ul>

      <div class="lg:hidden">
        <button id="menuToggle" class="text-white text-2xl focus:outline-none">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      <div class="hidden lg:flex gap-4">
        <button class="cursor-pointer">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <a href="${getPageHref("login.html")}">
          <button class="bg-[#2A9D8F] hover:bg-[#21867A] py-2 px-4 rounded-full transition duration-300 cursor-pointer">
            Log In
          </button>
        </a>
      </div>
    </section>

    <div id="mobileMenu" class="lg:hidden hidden absolute top-[70px] left-0 right-0 backdrop-blur-lg bg-[rgba(69,215,184,0.25)] shadow-lg z-[1000] py-4">
      <ul class="flex flex-col items-center gap-4 font-medium text-[16px]">
        ${["index.html", "services.html", "about.html", "contact.html", "blog.html"]
          .map((page) => {
            const label = page
              .replace(".html", "")
              .replace("index", "Home")
              .replace(/^\w/, (c) => c.toUpperCase());
            return `
              <li>
                <a href="${getPageHref(page)}" class="hover:text-[#f5f5f5] text-[#f5f5f5] transition duration-300">${label}</a>
              </li>`;
          })
          .join("")}
        <li>
          <a href="${getPageHref("login.html")}" class="bg-[#f5f5f5] hover:bg-[#d3d3d3] py-2 px-4 rounded-full transition duration-300 text-primary">
            Log In
          </a>
        </li>
      </ul>
    </div>

    <div id="searchModal" class="fixed inset-0 bg-[rgba(36,36,36,0.9)] backdrop-blur-[15px] flex items-center justify-center z-[9999] hidden">
      <button id="closeModal" class="absolute top-6 right-10 text-white text-3xl hover:text-[#2A9D8F] transition duration-300 cursor-pointer opacity-0">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="w-[80%] mx-auto px-6 opacity-0 translate-y-10 transition-all duration-300 ease-in-out">
        <input type="text" placeholder="Search..." class="w-full px-8 py-3 border-[#2A9D8F] text-white text-lg focus:outline-none border-b-4 bg-transparent"/>
        <button class="bg-[#2A9D8F] hover:bg-[#21867A] p-[14px] rounded-4xl w-full mt-5 text-md font-medium text-[#f5f5f5] tracking-widest cursor-pointer">SEARCH</button>
      </div>
    </div>
  `;
};

const NavbarScript = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navbar").innerHTML = Navbar();

    const searchBtn = document.querySelector(".fa-magnifying-glass");
    const modal = document.getElementById("searchModal");
    const closeBtn = document.getElementById("closeModal");
    const modalContent = modal.querySelector("div");
    const closeBtnIcon = modal.querySelector("#closeModal");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    const navbar = document.getElementById("nav");

    // Search Modal
    searchBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.offsetHeight;
      modalContent.classList.remove("opacity-0", "translate-y-10");
      modalContent.classList.add("opacity-100", "translate-y-0");
      closeBtnIcon.classList.remove("opacity-0");
      closeBtnIcon.classList.add("opacity-100");
    });

    closeBtn.addEventListener("click", () => {
      modalContent.classList.remove("opacity-100", "translate-y-0");
      modalContent.classList.add("opacity-0", "translate-y-10");
      closeBtnIcon.classList.remove("opacity-100");
      closeBtnIcon.classList.add("opacity-0");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 300);
    });

    // Scroll effect
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        navbar.classList.remove("w-[90%]", "md:w-[85%]", "lg:w-[75%]", "rounded-full", "top-5", "bg-transparent");
        navbar.classList.add("w-full", "top-0", "bg-[rgba(36,36,36,0.4)]", "backdrop-blur-[12px]");
      } else {
        navbar.classList.remove("w-full", "top-0", "bg-[rgba(36,36,36,0.4)]", "backdrop-blur-[12px]");
        navbar.classList.add("w-[90%]", "md:w-[85%]", "lg:w-[75%]", "rounded-full", "top-5", "bg-transparent");
      }
    });

    // Mobile menu toggle
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  });
};

export default NavbarScript;
