function ConceptItem({details}) {
    return (
        <li className="concept">
            <img src={details.image} alt={details.title} />
            <h2>{details.title}</h2>
            <p>{details.description}</p>
        </li>
    );
}

export default ConceptItem;