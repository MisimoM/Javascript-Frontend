import star from "../../..//assets/images/star.svg";
import clientOne from "../../..//assets/images/cassandra-warren.svg";
import clientTwo from "../../..//assets/images/amanda-tulling.svg";
import clientThree from "../../..//assets/images/jack-mcdogglas.svg";


export default function ClientBoxes() {
    
    const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate";

    const clientList = [
        {
            clientImg: clientOne, client: "Cassandra Warren", title: "Business Manager, Dorfus"
        },
        {
            clientImg: clientTwo, client: "Amanda Tulling", title: "Senior Developer, Square"
        },
        {
            clientImg: clientThree, client: "Jack McDogglas", title: "Key Account Manager, Gobona"
        }
    ]
    
    
    return(
        clientList.map((client, index) =>
        <div className="wrapper-item-bot" key={index}>
            <div className="wrapper-item-text">
                <img src={star} />
                <p>{text}</p>
            </div>
            <div className="wrapper-item-img">
                <img src={client.clientImg} />
                <div>
                    <h3>{client.client}</h3>
                    <p className="orange">{client.title}</p>
                </div>
            </div>
        </div>
        )
    )
}