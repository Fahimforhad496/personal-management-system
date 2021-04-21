export default function Library({ locale }) {
    return (
        <h1 className="heading">
            <span className="text">
                Hello {new Date().toLocaleTimeString(locale)}
            </span>
        </h1>
    );
}
