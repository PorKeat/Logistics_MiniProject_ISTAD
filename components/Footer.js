export default function renderFooter() {
  const currentPath = window.location.pathname;

  const getImageHref = (path) => {
    if (currentPath.includes("pages")) {
      return `../../assets/image/${path}`;
    }
    return `../assets/image/${path}`;
  };

  const getPageHref = (path) => {
    if (path === "index.html") {
      return `/src/index.html`;
    }
    return `/src/page/${path}`;
  };

  const footerHTML = `
    <footer class="font-mukta">
    <section class="bg-[#0f1123] text-white py-16 px-6 ">
      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-base md:text-[18px]">
        <!-- Column 1 -->
        <div>
          <img src="https://cdn.prod.website-files.com/5dd7315081d3e97c21e69c0f/5dd7c04c4e896a0ca249c4cd_logo-white.png" alt="Logo" class="h-10 mb-4"/>
          <p class="mb-2 font-normal hover:text-[#fcb621]">Cambodia</p>
          <div class="space-y-2">
            <p class="flex items-center gap-2 font-normal">
              <i class="fa-regular fa-envelope"></i>
              <a href="mailto:info@example.com" class="text-yellow-400 hover:text-[#fcb621]">info.istad@gmail.com</a>
            </p>
            <p class="flex items-center gap-2 font-normal">
              <i class="fa-regular fa-comments"></i>
              <a href="#" class="text-yellow-400 hover:text-[#fcb621]">Livechat</a>
            </p>
          </div>
        </div>
        <div>
          <h3 class="font-bold text-white mb-4">Company</h3>
          <ul class="space-y-2 text-gray-300 font-normal">
            <li><a href="${getPageHref(
              "index.html"
            )}" class="hover:text-[#fcb621]">Home</a></li>
            <li><a href="${getPageHref(
              "blog.html"
            )}" class="hover:text-[#fcb621]">Blog</a></li>
            <li><a href="${getPageHref(
              "contact.html"
            )}" class="hover:text-[#fcb621]">Contact</a></li>
            <li><a href="${getPageHref(
              "about.html"
            )}" class="hover:text-[#fcb621]">About Us</a></li>
            <li><a href="${getPageHref(
              "services.html"
            )}" class="hover:text-[#fcb621]">Service</a></li>
            <li><a href="${getPageHref(
              "faq.html"
            )}" class="hover:text-[#fcb621]">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-white mb-4">Services</h3>
          <ul class="space-y-2 text-gray-300 font-normal">
            <li><a href="${getPageHref(
              "sea-freight.html"
            )}" class="hover:text-[#fcb621]">Sea Freight</a></li>
            <li><a href="${getPageHref(
              "train-freight.html"
            )}" class="hover:text-[#fcb621]">Train Freight</a></li>
            <li><a href="${getPageHref(
              "air-freight.html"
            )}" class="hover:text-[#fcb621]">Air Freight</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-white mb-4">Contact</h3>
          <ul class="space-y-3 text-gray-300 font-normal">
            <li>
              <p class="font-medium flex items-center"><i class="fa-solid fa-phone mr-2"></i> +8558123456</p>
            </li>
            <li>
              <p class="font-medium flex items-center"><i class="fa-solid fa-envelope mr-2"></i> info.istad@gmail.com</p>
            </li>
            <li>
              <p class="font-medium flex items-center"><i class="fa-solid fa-location-dot mr-2"></i> Phnom Penh</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
    `;

  // Inject the footer content into the <footer> tag with id="footer"
  document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.innerHTML = footerHTML;
    }
  });
}
