import { Link } from "@tanstack/react-router";

export const FooterSection = () => {
	return (
		<footer className="bg-black/2 py-[3.2rem]">
			<div className="tainer">
				<h1 className="font-bold font-manrope text-[6.6rem] leading-[7rem]">
					Vamos trabalhar <br /> juntos?
				</h1>
        <div className="mt-[6.5rem] pt-[6.5rem] pb-[2.7rem] border-y border-[#E6E6E6] flex">
          <div className="flex-1">
            <h3 className="font-semibold font-epilogue text-[2rem] text-[#6A6A6A]">Orlando Jones</h3>
            <p className="font-[200] font-inter text-[2rem] mt-[2.4rem] text-[#6A6A6A]">
              Designer de Produto <br /> & Front-end Developer
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold font-epilogue text-[2rem] text-[#6A6A6A]">Navegação</h3>
            <Link to="/works" className="block font-[200] font-inter text-[2rem] mt-[2.4rem] text-[#6A6A6A]">
              Trabalhos
            </Link>
            <Link to="/about" className="block font-[200] font-inter text-[2rem] text-[#6A6A6A] my-[.8rem]">
              Sobre mim
            </Link>
            <Link to="/cv" className="block font-[200] font-inter text-[2rem] text-[#6A6A6A]">
              Meu CV
            </Link>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold font-epilogue text-[2rem] text-[#6A6A6A]">Contacto</h3>
            <p className="block font-[200] font-inter text-[2rem] mt-[2.4rem] text-[#6A6A6A]">
            laudesjones77@gmail.com
            </p>
            <p className="block font-[200] font-inter text-[2rem] mt-[.8rem] text-[#6A6A6A]">
              +244 931324368
            </p>
            <a href="https://www.linkedin.com/in/orlando-jones-2026/" target="_blank" rel="noopener noreferrer" className="block font-[200] font-inter text-[2rem] text-[#6A6A6A] my-[.8rem]">
              Linkedin
            </a>
            <a href="https://mirantes.io" target="_blank" rel="noopener noreferrer" className="block font-[200] font-inter text-[2rem] text-[#6A6A6A]">
              Mirantes
            </a>
          </div>
        </div>
        <p className="mt-[3.2rem] font-epilogue font-light text-[2rem] text-[#6A6A6A]">&copy; {new Date().getFullYear()} Orlando MJ · Recife, PE</p>
			</div>
		</footer>
	);
};
