import {
	LucideCar,
	LucideCheckCircle,
	LucideFlame,
	LucideGamepad2,
	LucideHouse,
} from "lucide-react";
import type { Route } from "./+types/ledger";
import { ProgressBar } from "~/components/progressbar";
import { Card } from "~/components/card";
import { Transactions, type Transaction } from "~/components/ledger/Transactions";

const transactions: Transaction[] = [
  {
    date: "2024-01-01",
    description: "Amazon",
    category: "entertainment",
    amount: 1000,
    currency: "NOK",
  },
  {
    date: "2024-01-01",
    description: "Amazon",
    category: "entertainment",
    amount: 1001,
    currency: "NOK",
  },
  {
    date: "2024-01-01",
    description: "Ruter",
    category: "transportation",
    amount: 46,
    currency: "NOK",
  },
  {
    date: "2024-01-01",
    description: "Ruter",
    category: "transportation",
    amount: 45.50,
    currency: "NOK",
  },
  {
    date: "2024-01-01",
    description: "Netflix",
    category: "entertainment",
    amount: 100,
    currency: "NOK",
  },
  {
    date: "2024-01-01",
    description: "Lunch",
    category: "pleasure",
    amount: 100,
    currency: "NOK",
  },
];

export function loader() {
	return { name: "Ledger owl's Grimoire", transactions };
}

export default function Ledger({ loaderData }: Route.ComponentProps) {
	return (
		<div className="contents">
			<div className="">
				<h1 className="">{loaderData.name}</h1>
				<p>
					The owl will help you monitor your spending using magical runes of
					restraints.
				</p>
			</div>
			<div className="group active-runes">
				<div className="header">
					<h2>Active runes</h2>
					<p>These runes are currently active and monitoring your spending.</p>
				</div>

				<div className="grid">
					{ActiveRunes.map((rune) => (
						<Rune key={rune.id} rune={rune} />
					))}
				</div>
			</div>

			<div className="group">
				<Card>
					<h2>About Runes of Restraint</h2>
					<p>
						The ancient art of financial discipline, taught by the wise Ledger
						Owl. Each rune represents a spending category, helping you channel
						your resources more effectively.
					</p>

					<div className="benefits">
          <h3>Rune benefits</h3>
						<ul>
							<li>
								<b>Auto-save:</b> Sends unused spending into a savings account
							</li>
							<li>
								<b>Early Warnings:</b> Receive alerts before exceeding limits
							</li>
							<li>
								<b>Monthly Reset:</b> Keep your goals fresh each month, these
								runes reset at the start of each month.
							</li>
						</ul>
          </div>
				</Card>
			</div>

      <div className="group">
        <h2>The Owl's ledger</h2>
        <p>
          The Owl's ledger is a magical book that records all your spending. It is
          protected by a powerful spell that prevents anyone from reading it without
          the proper permission.
        </p>
        <Transactions items={loaderData.transactions} />
      </div>

		</div>
	);
}

const ActiveRunes = [
	{
		id: "flame",
		name: "Flame Rune",
		icon: LucideFlame,
		description: "Eating out",
		color: "red",
		progress: 320,
		total: 3000,
	},
	{
		id: "earth",
		name: "Earth Rune",
		icon: LucideHouse,
		description: "Housing",
		color: "purple",
		progress: 1200,
		total: 15000,
	},
	{
		id: "wind",
		name: "Wind Rune",
		icon: LucideCar,
		description: "Transportation",
		color: "yellow",
		progress: 350,
		total: 450,
	},
	{
		id: "water",
		name: "Water Rune",
		icon: LucideGamepad2,
		description: "Entertainment",
		color: "pink",
		progress: 2100,
		total: 2000,
	},
];

type RuneType = (typeof ActiveRunes)[number];

const OwlMessages: Record<string, string> = {
	good: "Owl reports nothing wrong",
	warning: "Owl has noticed you're closing in on your budget",
	error: "Owl has noticed you're over your budget",
};

const Rune = ({ rune }: { rune: RuneType }) => {
	const progress = Math.round((rune.progress / rune.total) * 100);
	let message = "good";

	if (progress > 70) {
		message = "warning";
	}
	if (progress > 90) {
		message = "error";
	}
	return (
		<div className="card rune">
			<div className="header">
				<div className="left">
					<div className="icon" data-color={rune.color}>
						<rune.icon size={20} />
					</div>
					<div className="description">
						<h3>{rune.name}</h3>
						<p>{rune.description}</p>
					</div>
				</div>
				<div className="right">
					<LucideCheckCircle />
					<span>
						{rune.progress} NOK / {rune.total} NOK
					</span>
				</div>
			</div>
			<div className="body">
				<ProgressBar progress={rune.progress} total={rune.total} />
			</div>
			<div className="footer">
				<p data-color={message}>{OwlMessages[message]}</p>
				<button type="button">
					Auto-save: <span className="text-warning">Off</span>
				</button>
			</div>
		</div>
	);
};
