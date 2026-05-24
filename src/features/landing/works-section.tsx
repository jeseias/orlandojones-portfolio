import { MoveRight } from "lucide-react";
import ImgOne from "../../assets/img-1.png";

export const WorksSection = () => {
	return (
		<section className="bg-[#F6F6F6] py-[9.8rem]">
			<div className="tainer flex">
				<h3 className="font-semibold font-manrope text-[3.6rem] w-1/2">
					Experiências de trabalho
				</h3>
				<div className="w-1/2 gap-y-[3.2rem] flex flex-col">
					{Array.from([1, 2, 3, 4]).map((item) => (
						<Work key={item} img={item === 2 ? ImgOne : undefined} />
					))}
				</div>
			</div>
		</section>
	);
};

type WorkProps = {
  img?: string
}

const Work = ({ img }: WorkProps) => {
	return (
		<article className="border-b border-[#E6E6E6] pb-[3.2rem]">
			<h5 className="uppercase font-normal text-[2rem] text-[#6A6A6A] font-manrope mb-[1.6rem]">
				Grupo Statement
			</h5>
			<div className="flex items-start gap-[2.4rem]">
				<div className="flex min-w-0 flex-1 flex-col">
					<h4 className="mb-[1.6rem] font-manrope text-[3.2rem] font-normal leading-16 text-black">
						Encontre o melhor emprego e construa uma carreira profissional
					</h4>
					<button
						type="button"
						className="flex w-fit cursor-pointer items-center transition-opacity hover:opacity-80"
					>
						<span className="mr-[1.6rem] text-[1.6rem] font-medium text-[#1A1A1A]">
							Ver Projeto
						</span>
						<MoveRight size={20} />
					</button>
				</div>
				{img && (
					<img
						src={img}
						alt="Grupo Statement"
						className="h-[14.659rem] w-[24.852rem] shrink-0 object-cover"
					/>
				)}
			</div>
		</article>
	);
};
