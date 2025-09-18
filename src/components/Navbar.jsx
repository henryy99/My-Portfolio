function Navbar() {
  return (
    <nav className="w-full h-20 fixed z-10 bg-primary-dark shadow-xl border-b-1 border-b-dark-green hidden sm:block">
      <ul className="flex justify-center gap-10 items-center h-full text-lg text-text-grey uppercase tracking-wider ">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
