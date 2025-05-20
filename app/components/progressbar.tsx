const progressBarDefaultColors = {
        empty: "empty",
        filled: "filled",
        warning: "warning",
        error: "error"
    }

const questProgressColors = {
    error: "empty",
    warning: "filled",
    filled: "warning",
    empty: "error"
}

export const ProgressBar = ({ progress, total, type = "default" }: { progress: number, total: number, type?: "default" | "quest" }) => {
    const progressPercentage = Math.round(progress / total * 100)
    const progressText = progressPercentage.toFixed(1)

    const colors = type === "default" ? progressBarDefaultColors : questProgressColors

    let color = colors.empty
    if (progressPercentage > 0) {
        color = colors.filled
    }
    if (progressPercentage > 70) {
        color = colors.warning
    }
    if (progressPercentage > 90) {
        color = colors.error
    }

    return (
        <div className="progress-bar">
            <div className="progress-bar-fill" data-color={color} style={{ width: `${progressPercentage}%` }}>
                <span>{progressText}%</span>
            </div>
        </div>
    )
}


