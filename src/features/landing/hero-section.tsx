import { CopyIcon } from "lucide-react";

export const HeroSection = () => {
	return (
		<section className="tainer pt-[15rem] flex flex-col justify-center text-center">
			<p className="text-[1.88rem] text-[#343330]">😎 Olá, Sou o Orlando!</p>
			<h2 className="text-black font-bold text-[9.6rem]">
				Designer de Produto.
			</h2>
			<p className="font-bold text-[2rem] text-[#343330] my-[.8rem]">
				Mais de 3 anos transitando entre UX/UI e Web design,
			</p>
			<p className="text-[#6A6A6A] font-normal text-[2rem]">
				criando produtos que fazem sentido para quem usa e geram resultado para
				quem investe.
			</p>
			<div className="flex justify-center mt-[2.4rem]">
				<button type="button" className="flex items-center w-[26.4rem] h-[5.3rem] px-[3.2rem] bg-white text-[#6A6A6A] mr-[1.6rem] shadow-[0_0_4.8px_0_rgba(0,0,0,0.06)] cursor-pointer hover:opacity-90 transition-all ease-in-out duration-300">
					<CopyIcon color="#6A6A6A" size={24} />
					<span className="text-[#6A6A6A] font-medium text-[1.8rem] ml-[.8rem]">
						Copiar o meu E-mail
					</span>
				</button>
				<button
          type="button"
					className={`bg-[#413F3A] h-[5.3rem] text-[1.8rem] text-white font-bold px-[1.6rem] cursor-pointer hover:opacity-90 transition-all ease-in-out duration-300`}
				>
					Fale comigo
				</button>
			</div>
		</section>
	);
};