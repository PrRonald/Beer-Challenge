export const Products = ({items}) => {
    return(
        <section>
            {items.map(item => (
                <div
                key={item.id}
                className=""
            >
                {item.brand}
            </div>
            ))}
            
        </section>
    );
}