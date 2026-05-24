import Img2 from "../../assets/img-2.png";
import Img3 from "../../assets/img-3.png";
import Img4 from "../../assets/img-4.png";
import Img5 from "../../assets/img-5.png";
import Img6 from "../../assets/img-6.png";
import Img7 from "../../assets/img-7.png";
import Img8 from "../../assets/img-8.png";
import Img9 from "../../assets/img-9.png";
import Img10 from "../../assets/img-10.png";
import Img11 from "../../assets/img-11.png";
import Img12 from "../../assets/img-12.png";
import Img13 from "../../assets/img-13.png";
import Img14 from "../../assets/img-14.png";
import Img15 from "../../assets/img-15.png";
import Img16 from "../../assets/img-16.png";
import Img17 from "../../assets/img-17.png";

type GalleryRow = {
	flex: string[];
	images: string[];
};

const GALLERY_ROWS: GalleryRow[] = [
	{
		images: [Img2, Img3, Img4, Img5, Img6, Img7],
		flex: [
			"flex-[4]",
			"flex-[2]",
			"flex-[2]",
			"flex-[1.5]",
			"flex-[1.5]",
			"flex-[2.5]",
		],
	},
	{
		images: [Img8, Img9, Img10, Img11, Img12],
		flex: ["flex-[2]", "flex-[2]", "flex-[4]", "flex-[2]", "flex-[2]"],
	},
	{
		images: [Img13, Img14, Img15, Img16, Img17],
		flex: ["flex-[2]", "flex-[1.5]", "flex-[2]", "flex-[2]", "flex-[2.5]"],
	},
];

export const GallerySection = () => {
	return (
		<section className="py-[15rem]">
			<div className="tainer mb-[4.8rem]">
				<h3 className="font-bold text-black font-inter text-[3.6rem]">
					Coletânia de momentos como:
				</h3>
				<p className="text-[#6A6A6A] font-[200] font-inter text-[2rem]">
					Front-end, Designer grafico, UI Design, UX/UI Design Gestor de mídia
					social.
				</p>
				<div className="flex flex-col gap-[0.8rem] mt-[2.4rem]">
					{GALLERY_ROWS.map((row, rowIndex) => (
						<div key={row.images[0]} className="flex h-[20rem] gap-[0.8rem]">
							{row.images.map((src, imageIndex) => (
								<img
									key={src}
									src={src}
									alt={`Momento ${rowIndex * 6 + imageIndex + 1}`}
									className={`${row.flex[imageIndex]} h-full min-w-0 object-cover`}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
