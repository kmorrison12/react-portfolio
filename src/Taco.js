export default function Taco({ mops, leche, decaf }) {
    return (
        <h1 style={leche ? { backgroundColor: "teal" } : { backgroundColor: "orange" }}>{mops} {decaf ? "DECAFE" : ""}</h1>
    )
}