import { Link } from "react-router";

export default function Header(){
    return (
        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cars/new'>Create Car</Link></li>
            </ul>
        </header>
    )
}