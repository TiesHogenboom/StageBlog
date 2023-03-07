
import "./BlogCard.css"

const BlogCard = () => {
    return(
        <>
    <article className="BlogCard">
        <ul className="BlogCard__list">
            <li>
                <a href="/music">
                    <img className="BlogCard__img"src="https://f4.bcbits.com/img/a1923504110_2.jpg" alt=""></img>
                    <h6 className="BlogCard__title">Title</h6>
                </a>
            </li>
            <li>
                <a href="/music">
                    <img className="BlogCard__img"src="https://f4.bcbits.com/img/a1923504110_2.jpg" alt=""></img>
                    <h6 className="BlogCard__title">Title</h6>
                </a>
            </li>
        </ul>
        
        </article>
    </>
        );
}

export default BlogCard;