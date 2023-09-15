import CursosConcluidos from "./CursosConcluidos";
import CursosInscritos from "./CursosInscritos";

const Cursos = () => {
    return (
        <div>       
            <CursosInscritos></CursosInscritos>
            <CursosConcluidos></CursosConcluidos>
        </div>
    );
}

export default Cursos;