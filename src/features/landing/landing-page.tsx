import { HeroSection } from "./hero-section";
import { QualificationSection } from "./qualification-section";
import { SecondSection } from "./second-section";
import { WorksSection } from "./works-section";

export const LandingPage = () => {
	return (
		<main>
			<HeroSection />
			<SecondSection />
			<WorksSection />
      <QualificationSection />
		</main>
	);
};
