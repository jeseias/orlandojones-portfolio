import { CopyIcon, MapPin } from "lucide-react";
import type { SVGProps } from "react";
import ImgOne from "../../assets/img-1.png";

export const LandingPage = () => {
	return (
		<main>
			<HeroSection />
			<SecondSection />
		</main>
	);
};

const HeroSection = () => {
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

const SecondSection = () => {
	return (
		<section className="tainer mt-[15.99rem] flex justify-center">
			<div>
        <div className="relative w-[27.452rem] h-[27.9rem] bg-[#F3DFCB] p-[2.522rem] text-[#343330] rotate-z-5 shadow-[0_4px_4px_0_#E1E1DE]">
          <PinSVG className="absolute -top-1/18 left-50 -translate-x-1/6" />
          <span className="font-normal text-[1.6rem] font-inter leading-[2.88rem] text-[#343330]">
            Eu crio experiências web memoráveis ​​para marcas DE TODOS OS TAMANHOS.
            Acredito que contar histórias autênticas é a chave para envolver
            públicos, evocando emoções e impulsionando conversões.
          </span>
        </div>
        <div className="px-[2.4rem] flex flex-col justify-center relative top-1/10 -left-4 bg-[#F2F0E9] w-[23rem] h-[7.4rem] text-[#343330] shadow-[0_4px_4px_0_#E1E1DE] text-[#343330] font-normal text-[1.6rem] font-inter">
          <h4 className="flex"><MapPin color="#F2F0E9" fill="#d67a1f" /> Angola, Luanda</h4>
          <p className="">15:32:28 PM</p>
        </div>
      </div>
			<div
				className="border border-[#D9D9D9] border-[1.6rem] w-[66.4rem] h-[38.4rem] -rotate-5 relative top-15 left-20"
				style={{
					backgroundImage: `url(${ImgOne})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
		</section>
	);
};

const PinSVG = ({ ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="40"
			height="31"
			viewBox="0 0 40 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			{...props}
		>
			<title>Pin icon</title>
			<rect
				width="38.0021"
				height="28.9999"
				transform="translate(1.51774) rotate(3)"
				fill="url(#pattern0_1375_303)"
			/>
			<defs>
				<pattern
					id="pattern0_1375_303"
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<use
						xlinkHref="#image0_1375_303"
						transform="matrix(0.0156241 0 0 0.0204742 2.81486e-05 -0.155176)"
					/>
				</pattern>
				<image
					id="image0_1375_303"
					width="64"
					height="64"
					preserveAspectRatio="none"
					xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAANPUlEQVR4AexZC3BU1Rn+zrl3lw2EsDTyJsmKwnRGkVgdra+SVKsWELAqVmMLVDpanRFQp1Wq7kZlxnbqiK1TO9ZpIlotVSZAgoi0Rq3alzMEROuIkqDISx5LEmDZu/fefv/dLIQQkn3hoHDm/Oeeex7/+f/v/P85556rcYKHkwCc4AaAkxZw0gJOcAROusAJbgDH/yIYQCBEM40ooJG0m+SS5Llaw1wA1iOHQN459D6mXYNBUEGjT6z5pxf2Dz/346EVb88NBdfdMwr/vuvU4NM3DC+fdKY5e2C/WDOnsYaihEgZR51xjy+lQ4DKtK6+4Vzf7P/eVYrZFQNxdomJYN8ElBFHYcDCBaeaeGTyYNTNKsFtFxXNUAqN2VjDcQiAKB9vvOWSQOi+CQVQSkFpN/lUzKeoo+yUQhe3XVKMO79bHPIZscZAQPqnP0vHGwCceSp/cf/QHeOLAacoqYlLMT0yAFco+e66Lus1XCQw8/wiVE8YFIrFCEIG6wI5kUf+YjlZzeigCj7px0zTijJzvsZbRPnKvh09RMGOLBQzIq6Q5AGlFElDaw2lE5hwRj/cdWlx6ICK0R2Q1tgaOYYgg6l1BNC7vznEt/rqcQU1k88qqPlWaZ9GQ+ndZJ/GAiXKg8oXhu6o4Ky7fnbTJImKiYG2mMLz7+7GPcs+x6ON29G8K+EpbrA2GTV8potbLgri4tN8IS6Mc5BGSI2SRtNum1TsiVrNN5wzIPzuL4YEF908CA9OCmL+VUH8qeobeOvOwXh4wsgZI4p8zexNkJgeGWn2NpUvSCoPUUmUTjZ0bI2PtsVx48JmvLcljvPKgtjRDsx6/nMkEi7EDQxIeyEglrAw7/JBdBXMDiIYTHI5lHbNZQ+AgRn9AkbjszcVBe++tB/6Gj74YEI7SZJ8kd+HyeMcLJwexLBCM8zBIp0FCNBXFfyNP7u4b2hORSE0Lb4zwXaxZF0rpj+7C/dfMRiPTBmAqWP9mD+xGKtuKwHgkOCBoLkeMJJHAmOo/zkjAsF2RMUlvTZHS/TRKnosF+X9qKmtKsG5ZSb6GApauZwHB0olZwIMsnr7tYGh/U3UTh+AYUX+sIZRY8CYquGbfQBO460Xy8wXIhlSfV04joNVH8bwq5X78FRVf5zPbc+yk/Xi80KmaRw2noAAbeJAAqgc4xN4piT5Hj3VR686as2MQh9qnqkajrHDjtrGq3AdWaENGLoPSoIFeG32KZg/acCM8acX1P3grL4Lnpw2MHQHZx7QnEaS1wue8h/vSODXq9rwx5v6g2sLZ1nBILhKKeZdj2zb9tqKGwiBQZ4294VgX8U3BNFLODRqLw07qqcWFqCm9qbhOHOoH5Zjw+FgMmhH/WEPpURYRSEVFAw+feAiiSeuD+L+CYUYPzoAuCZJxFCQIDPvsN/di1vx+LS+GDvcB5PVCQf0CEUezkGScYWkn1Aqb5LVwL4CPvIOwGPPVA3C2KEmladEoOyOIgQaDk/orswky5RSUEox55IczpZNSs6a07GP++gaKYHl6brSzmF7F2LKS28txhlD+3EAas8zgPYI3sov5i+klOoYh90YlVJMAa6N+Gy3Db61eAU9JOTeQ22nKhNmRflIIzR2qA8Wp0OE1FRamriuKCq57shFh1zdVXrAdK5QSrG96lQkecUy7VGniqNmaZh4f0sCCmhCL0H3Un+wOoFENGYB8YSRLFMOoGwSnzg+Qmoi/PSq1Z/Z3JXwRm+SpQ0AGTV9uM1uWbamDYpmrGiyikdQlh+jyPmDUPrslUq2f+L1A9i8x62NAflzASTD1fNWRKN1/7OwHwX0e+MIE042y0fqkkln4ivkXZ7dk+VY2NK6H0+91Rr1w6juvtXhpZlYgPQUn6q8v2Fz9OX3W2FpP3cBA3ZXwTz3yLdr9Ka8jW1tLmYubKdMak4MsV5nXxTKFADp00QPqAwv3xGtX9sGJcqyNEGXgOSF+P5lRtmOt7XZVL4VW1vtGTasZ9IdPxsAAAtNXGkrI8t3RpeuiUFpm0C43j6dWojSFSCbdrIFpvqJ2R9Uvs3KSHnhkR0A0pNbjGH4aAntHghQCa4H9iEQuG8nm+UvTYGr3YTHVN63tVuY+WwUW7NQXpjkAgAsy2rScAjCXg8EsQTQA+2O84EMkE9SKrnKWzx8Cd9N0ezMXvqmKCcAhIkFguC6BGE/QYhDPoCk3FsTJHMMyKDU21ptzHquHZn6fFdxyKprUebvB0Fo2Bdd2kQQ5MtQaboEeTnJ1btj0liQY+Qiu3GXjZuf24vNbS593u5xwetttLwAIINYYgmeO7RGGwiCyYsMDZqsVgTChXdspvCyUxAfpEj6pk3Sny725Nt7sCEajdhoy0l5GVdLki9KgmBVznt5Z7Ru3W5AH4Brahj8bPXZbnZKdyPcsrU8kwPV3VRlXJRXAGR0itbk+ozKecv3RV9YG4cR5+z7/DigY4DsDDxESLtcKBgw2D0YZJJzzDsAnkSWMXXMyKLg7980sHjNXtAOeFHDm175apQDk9co++T8Ufzawd5w9hwO9cw7ABr+SCg0PPy3lUvx6is1+M1/2lHXtBfaUuAWgZwWQ7Eg3jncd0U/jBxgztEcCzmGvAKgoSOh0kHhVctfwMjSYpw9bgxeq1+M374Twwvr2mBzZzB5EWKLJeQgeFGBgZofFQkIYa0xDzmEvAFAQSKhslPCr6xchNLSb3DBcwA7gfLy0Vi1/EX87m0LdWt2Q668fIbBE6Obndi0gj48CAwpUnj6pkKMKOoz3zRRgSxDXgAwTTNyWmhYeMWKxTjt1KHQsl3xdhbwEwSN8nGj0bj8GTz2jo2X1h4OghxnM5U9Ln7Eu8SRQc0r8pHsrrJeD3IHQCNSVjYkvKJhMUaXUnlueXIpCQhrkhyLnQTOGncmVjYsxKP/0FjEDyiL7TiZFD7zKKAZUAD/IJ0bOoAR/X0V2VoBJcxcgFQPU/s58yVUfhHo+zR7m0KxNqWZXJmBriBbn+OguKgIgwYoRFZsx/L32xHgzxRN33E6TovsmVYU5ZUiAGytlPL+ASQSuJCvGcesATCByKhQcXhlwyKMKhnCS28qrwwK0IWlcpGgghs2bkPFxOuw/vNoNVzf2fPqd0dfXLMHcbOQfVwoLpBKJZViQdqR97M4fZCMi9Fpd+rUsIu0nWp6yIryZWWDwy/XU/nSQTBcKk8IgCMVEA9o/mwzJl41DZ9u2lVNg4jAOzb7KufV74wuWb3DA8HmgpmpJYDBJrh8ZB0zBkCUH1U6LPz3V5agjD6vQOVFb29rc8GDP4ll8s7X9R9vwqRJ1+Gj5i0dyidltQgCb9IqI8t2Rles2QptJMhJiH09IIVpipJ9uksDPmB7uyNV6yXJlDICwAc9JzRySLi+4QXQAmBwtXe9FbkzG2rt+bxGS8tWXDXleny88YtqisiZP0K8JhOq8r769mjd2hj/ADnEzyUQbH2wKfkdzHefeXN9XCrekSRT6ix5j335Eys0YEDBY69wqxtVNhSubUHR/JSSWero2jHrLj981rdsxmWTrulJea+TWIKJBEFo7QQCb5a8K/felf90p4Omz125AH3dY5hhkjYAFtD4yPz7MOq0EdD8xFXglbjoLkrjUHBpvhs2bcXEqdPQ/Nn2o838oQ7MkTctwTkMBCV8aWGs7ibKwMnin/BSxGfgoHUhw5AWAJqmX3X9lND06dfDcS0olRRAEQS+IBVcbn9i9t+ffC0+2bg1wp0vbcEs3jG6vE+4v74t+tI68L9DgKfFTuIRDKUUTxfJMrkMvbf+C2xqbV1g2VbW9wJJbugxhAw4s6vDP+fgchmZ9E9Z3YVSPV3HxIaNW3HF5B9S+e2ifHWqLoNnkwO7MrL0i+gybpExnva8vlQeBFcOQA5XTpfu8eDyvah/L17L+rmkrGPvABiomDH9mlCoZDBN3+GWl5z9QyMqpJS/cvI0fPLp5myVT7H0QJj/cjS64oN9gIoD3DuZeNFy4nigYQ+WvRerJVgzvcIckt4BcBCuqqLp80cAeNwC7Rrc9xWFUi5F44r/yadbceWUa2kBOSufUsUDQSxh6dq9qTLv+UBDG+rW7q+1EM9ZeWHYGwDlZaVDQhdecB7Nn6ZPMwQXJ1n9oUzQJPDnv9ThwvFXRjds3DyX2FQL0zyRB8K99W0tv1wWwxNvHMCNtTuwdF17XmY+JWNvAIy/fPwlMO39VJbTTeVdz/H9WP/JFoz/3nWYdftdLdG21koqvyDFNI/PpkAgULnsgz0z//DPLyLrtscryDsvM08+XuwNgPLzv30ulJZmnHHld19/5z1nctXtGFP+nV1v/mv1Q3ELp1r8VeZxOwZJLBZrsW271nGc6kQi8Ua+hxDNeuLZsqT+VSz8ax3m3PswBpacoS6bOG1dfcPKh+AUh7gMPNBT569CXW8AVDeseG3u9Fn3LHn8iWfnRmPxsx0X46gYFd/RxudXPvYGgCgovn01MwvkrzCfX6uYDgBfK4W7KnMSgK6InGjvJy3gRJvxrvp+5S2gq0KZvv8fAAD//3DNGNcAAAAGSURBVAMAsTpKzKIUC8MAAAAASUVORK5CYII="
				/>
			</defs>
		</svg>
	);
};
