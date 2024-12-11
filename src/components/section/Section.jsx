import { SECTIONS_INFO } from '../../constants/sections-info';

const Section = () => {
	return (
		<>
			{SECTIONS_INFO.map(section => {
				return (
					<section key={section.id}>
						<h2>{section.title}</h2>
						<p>{section.text}</p>
					</section>
				);
			})}
		</>
	);
};

export default Section;
