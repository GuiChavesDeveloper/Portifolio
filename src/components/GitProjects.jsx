import '../styles/components/gitprojects.sass'
import { Link } from 'react-router-dom'

function GitProjects() {
    return (
        <>
            <div className="portifolio">
                <h1>Under Building...</h1>
                <Link to={"/Portifolio"} className='voltar'>Voltar</Link>
            </div>
        </>
    )
}

export default GitProjects