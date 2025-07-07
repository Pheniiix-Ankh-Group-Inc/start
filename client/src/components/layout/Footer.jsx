
import svgUrl from '../../assets/bma.svg';

function Footer() {
  return (
    <>
      <footer className="footer flex flex-col md:flex-row justify-around items-center text-center md:text-left bg-[#011D40] text-white pt-10">
        <nav className="">
          <img src={svgUrl} alt="BM logo" className="w-32 h-28 mb-1" />
        </nav>
        <nav>
          <h5 className="font-bold mb-2">LEGAL</h5>
          <a href="#" className="hover:opacity-80 transition">Termes of use</a>
          <a href="#" className="hover:opacity-80 transition">Privacy Policy</a>
          <a href="#" className="hover:opacity-80 transition">Cookies Policy</a>
        </nav>
        <nav>
          <h5 className="font-bold mb-2">FOLLOW US</h5>
          <div className="grid grid-flow-col gap-4">
            {/* Instagram */}

            <a
              href="https://www.instagram.com/bricemimifir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:opacity-80 transition"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm-4 1.25a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://ca.linkedin.com/in/brice-mimifir"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:opacity-80 transition"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.794-1.75-1.766s.784-1.766 1.75-1.766c.965 0 1.75.794 1.75 1.766s-.785 1.766-1.75 1.766zm13.5 11.268h-3v-5.604c0-3.368-4-3.114-4 0v5.604h-3v-10h3v1.528c1.396-2.586 7-2.777 7 2.476v5.996z" />              </svg>
            </a>

          </div>


        </nav>
      </footer>
      <footer>
        <div className="border-t border-white/20 mt-10 px-4 py-4 text-center text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} Brice Mimifir Consulting. Tous droits réservés.
        </div>

      </footer>
    </>
  );
}

export default Footer;
