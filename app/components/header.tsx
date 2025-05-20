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
			<div className="hidden md:flex items-center gap-6">
				<button
					type="button"
					className="relative p-2 rounded-full hover:bg-dark-100 transition-colors"
				>
					<LucideBell />
					<span className="absolute top-0 right-0 w-4 h-4 bg-error-500 rounded-full text-[10px] text-white flex items-center justify-center">
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
