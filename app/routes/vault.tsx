import { LucidePlus } from "lucide-react";
import type { Route } from "./+types/vault";

export function loader() {
  return {
    name: "Conjuration Vault",
    subtitle: "Convert real currency into magical power and set up automatic deposits"
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

  return (
    <div className="contents vault">
      <div className="vault-header">
        <h1>{loaderData.name}</h1>
        <p>{loaderData.subtitle}</p>
      </div>
      <section>
        <div className="grid">
            <div className="card group">
                <div className="header">
                    <h2>
                        Deposit Gold
                    </h2>
                </div>
                <div className="body">
                    <p>
                        Deposit gold into the vault to increase your magical power.
                    </p>

                    <form onSubmit={submit}>
                        <fieldset className="input-group">
                            <label htmlFor="amount">Deposit some gold</label>
                            <input type="number" name="amount" placeholder="Amount" />
                        </fieldset>
                        <button className="btn" type="submit">
                            <LucidePlus />
                            <span>Deposit</span>
                        </button>
                    </form>
                </div>
                <div className="footer">
                </div>
            </div>
            <div className="card group">
                <div className="header">
                    <h2>Binding Sigil</h2>
                </div>
                <div className="body">
                    <p>Schedule automatic monthly deposits to steadily grow your magical powers.</p>
                    <div className="input-group">
                        <label htmlFor="monthly-amount">Monthly Deposit Amount</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span>$</span>
                            <input id="monthly-amount" type="number" value={25} className="input-amount" readOnly />
                        </div>
                    </div>
                    <div className="conversion-hint">= 250 Mana Crystals per month</div>
                    <div className="input-group">
                        <label htmlFor="processing-day">Processing Day</label>
                        <select id="processing-day">
                            <option value="1">1st of each month</option>
                            <option value="15">15th of each month</option>
                            <option value="28">28th of each month</option>
                            <option value="etc">etc....</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
