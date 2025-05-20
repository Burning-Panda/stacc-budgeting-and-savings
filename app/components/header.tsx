import { LucideBell, LucideMenu, LucideSparkles } from "lucide-react";

export const Header = ({
	title,
	notifications,
}: {
	title: string;
	notifications: number;
}) => {
	return (
		<header id="header">
			<div className="logo">
				<LucideSparkles data-theme="yellow" />
				<h1 className="name">{title}</h1>
			</div>
			<div className="hidden">
				<button
					type="button"
					className=""
				>
					<LucideBell />
					<span className="">
						{notifications}
					</span>
				</button>
			</div>
			<button type="button" className="mobile-only">
				<LucideMenu />
			</button>
		</header>
	);
};
