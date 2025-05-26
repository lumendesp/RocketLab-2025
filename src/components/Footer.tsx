import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-6 py-6 flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <img src={logo} alt="" className="invert w-12"/>
          <h3 className="text-xl font-bold">RocketLib</h3>
          <p className="text-sm">Sua jornada literária começa aqui.</p>
        </div>
        <div className="text-sm text-neutral-400">
          &copy; {new Date().getFullYear()} RocketLib. Todos os direitos
          reservados.
        </div>
    </footer>
  );
};

export default Footer;
