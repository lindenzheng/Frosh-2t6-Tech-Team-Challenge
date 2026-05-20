export default function Toggle({ nite, setNite }) {
    return (
        <button
            className={`toggle ${nite ? "active" : ""}`}
            onClick={() => setNite(!nite)}
        >
            <div className="toggle-knob" />

            <span className="toggle-label">
                {nite ? "nite" : "day"}
            </span>
        </button>
    );
}