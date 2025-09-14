function Navbar() {
  return (
    <nav className="w-full h-20 hidden">
      <ul className="flex justify-center gap-10 items-center h-full text-lg text-text-grey uppercase tracking-wider">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
