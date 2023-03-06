import "./Head.css";

const Head = () => {
    return(
    <>
    <div className="headerImage"><img src="https://f4.bcbits.com/img/0029027455_100.png" alt=""></img></div>
    <section className="navigation">
        <div className="tabNavbar">
            <ol>
                <li >
                    <a className="tab" href="/music">Music</a>
                    <a className="tab" href="/music">notthat</a>
                    <a className="tab" href="/music">whowhat</a>
                </li>
            </ol>
        </div>
        
    </section>
    </>
        );
}

export default Head;