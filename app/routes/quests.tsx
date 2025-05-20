import { ProgressBar } from "~/components/progressbar";
import type { Route } from "./+types/quests";

const quests: Quest[] = [
	{
		name: "Light the Tower's Beacon",
		description:
			"Your first step as an apprentice is to light the magical beacon atop your tower, signaling your presence to the magical world.",
		rewards: 1000,
		completed: true,
		total: 100,
		progress: 100,
	},
	{
		name: "Light the Tower's Beacon",
		description:
			"Your first step as an apprentice is to light the magical beacon atop your tower, signaling your presence to the magical world.",
		rewards: 1000,
		completed: false,
		total: 100,
		progress: 50,
	},
];

export function loader() {
	return {
		name: "Quests",
		description:
			"Embark on magical journeys and earn rewards by completing savings goals",
		quests,
	};
}

export default function Quests({ loaderData }: Route.ComponentProps) {
	const completedQuests = quests.filter((quest) => quest.completed);
	const activeQuests = quests.filter((quest) => !quest.completed);

	return (
		<div className="contents">
			<div>
				<h1 className="">{loaderData.name}</h1>
				<p>{loaderData.description}</p>
			</div>
			<div className="group">
				<div className="header">
					<h2>Active Quests</h2>
				</div>
				<div className="grid">
					{activeQuests.map((quest) => (
						<RenderQuest key={quest.name} quest={quest} />
					))}
				</div>
			</div>

			<div className="group">
				<div className="header">
					<h2>Completed Quests</h2>
				</div>
				<div className="grid">
					{completedQuests.map((quest) => (
						<RenderQuest key={quest.name} quest={quest} />
					))}
				</div>
			</div>
		</div>
	);
}

type Quest = {
	name: string;
	description: string;
	rewards: number;
	completed: boolean;
	total: number;
	progress: number;
};

const RenderQuest = ({ quest }: { quest: Quest }) => {
	return (
		<div className="card quest">
			<div className="header">
				<h3>{quest.name}</h3>
			</div>
			<div className="body">
				<p>{quest.description}</p>
				<ProgressBar progress={quest.progress} total={quest.total} type="quest" />
			</div>
			<div className="footer">
				<p>Rewards: {quest.rewards}</p>
			</div>
		</div>
	);
};
