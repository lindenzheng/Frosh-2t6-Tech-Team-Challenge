export default function Logo({ nite }) {
    const textSrc = nite
        ? "/assets/text-yellow.svg"
        : "/assets/text-purple.svg";
    return (
        <div className="logo">
            <div className="container">
                <div className="circle">
                    <div className={`circle-anim ${nite ? "nite" : "day"}`} />
                </div>
            </div>

            <div className="logo-text">
                <img src={textSrc} alt="F!ROSH WEEK" />
            </div>
        </div>
    )
}