import { LucideLock, LucideUnlock } from "lucide-react";
import type { Route } from "./+types/lore";


export function loader() {
  return { name: "Lore & Journal" , description: "Record your magical journey and discover the secrets of the wizarding world" };
}

const LoreEntry = ({ title, date, description, locked }: { title: string, date: string, description: string, locked: boolean }) => {
  return (
    <div className="wizard-card lore-card" data-locked={locked}>
      <div className="lore-locked-header">
        <h3 className="font-heading lore-title">
          <span className="lore-icon">
            {locked ? (
              <LucideLock />
            ) : (
              <LucideUnlock />
            )}
          </span>
          {title}
        </h3>

        <div className="lore-date">{date}</div>
      </div>
      <p className="lore-desc">{description}</p>
    </div>
  );
};

export default function Lore({ loaderData }: Route.ComponentProps) {
  return (
    <div className="lore-container container">
      <div className="lore-header">
        <h1 className="font-heading">{loaderData.name}</h1>
        <p className="lore-intro">{loaderData.description}</p>
      </div>
      <div className="wizard-card text-center">
        <p className="lore-empty">You haven't unlocked any journal entries yet. Complete quests to reveal your magical story!</p>
      </div>
      <div className="lore-entries">
        <h2 className="font-heading">Locked Entries</h2>
        <LoreEntry title="Day 1: The Awakening Tower" date="May 19, 2025" description="This lore is still locked. Complete quests to unlock this entry." locked={true} />
        <LoreEntry title="The Moon Owl's Wisdom" date="May 19, 2025" description="This lore is still locked. Complete quests to unlock this entry." locked={true} />
        <LoreEntry title="Visions Through the Potion" date="May 19, 2025" description="This lore is still locked. Complete quests to unlock this entry." locked={true} />
        <LoreEntry title="The Crystal Familiar Bonds" date="May 19, 2025" description="This lore is still locked. Complete quests to unlock this entry." locked={true} />
      </div>
      <div className="wizard-card lore-about">
        <h2 className="font-heading">About Your Journal</h2>
        <p className="lore-about-desc">Your magical journal records your journey as a wizard apprentice, documenting your achievements, discoveries, and the growth of your magical powers through savings.</p>
        <div className="lore-about-features">
          <h3 className="lore-about-features-title">Journal Features</h3>
          <ul className="lore-about-features-list">
            <li><span className="lore-feature-label">Quest Chronicles:</span> Every completed quest adds a new chapter to your story</li>
            <li><span className="lore-feature-label">Magical Discoveries:</span> Learn the lore of the world as you unlock new realms</li>
            <li><span className="lore-feature-label">Personal History:</span> Record your progression from apprentice to master wizard</li>
            <li><span className="lore-feature-label">World Secrets:</span> Uncover ancient knowledge that reveals the deeper mysteries of magic</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
