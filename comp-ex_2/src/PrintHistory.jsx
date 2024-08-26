export default function PrintHistory({ tryHistory }) {
    return (
        <>
            <ul>
                {tryHistory.map((h, idx) => (
                    <li key={idx}>{h}</li>
                ))}
            </ul>
        </>
    );
}
