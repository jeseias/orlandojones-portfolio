const SKILLS = [
	"Gestão de equipes de design.",
	"Treinamento de designers para entregar qualidade",
	"Pesquisa de descoberta",
	"Design thinking",
	"Sessões de testes de usabilidade",
	"Prototipagem",
	"Pesquisa de mercado",
	"Transparência colaborativa com desenvolvedores",
	"Relatórios e auditorias de UX",
];

export const SkillsSection = () => {
	return (
		<section className="tainer flex py-[15rem]">
			<h3 className="font-semibold font-manrope text-[3.6rem] w-1/2">
				Perícias.
			</h3>
			<div className="grid grid-cols-2 gap-x-[2.4rem]">
				{SKILLS.map((item) => (
					<p
						key={item.replace(" ", "-")}
						className="text-[2rem] font-normal text-[#3A4150] font-epilogue"
					>
						- {item}
					</p>
				))}
			</div>
		</section>
	);
};
