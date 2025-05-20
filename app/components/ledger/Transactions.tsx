import { LucideCar, LucideFlame, LucideHeart, LucideHouse } from "lucide-react";
import { useMemo } from "react";

export type Transaction = {
    date: string;
    description: string;
    category: "entertainment" | "transportation" | "housing" | "pleasure";
    amount: number;
    currency: string;
}

const categories = {
    entertainment: "Entertainment",
    transportation: "Transportation",
    housing: "Housing",
    pleasure: "Pleasure",
}

const categoryIcons = {
    entertainment: <LucideFlame />,
    transportation: <LucideCar />,
    housing: <LucideHouse />,
    pleasure: <LucideHeart />,
}

export const Transactions = ({ items }: { items: Transaction[] }) => {
    const memoizedLedger = useMemo(() => {
        return (
            <div className="ledger">
                <div className="header">
                <div>Date</div>
            <div>Description</div>
            <div>Category</div>
            <div>Amount</div>
                </div>
                {items.map((item) => (  
                    <div className="item" key={item.date + item.description + item.amount}>
                        <div>{item.date}</div>
                        <div>{item.description}</div>
                        <div className="category" data-category={item.category}>{categoryIcons[item.category]} {categories[item.category]} {item.currency}</div>
                        <div>{item.amount}</div>
                    </div>
                ))}
            </div>
        )
    }, [items])

    return memoizedLedger
}

