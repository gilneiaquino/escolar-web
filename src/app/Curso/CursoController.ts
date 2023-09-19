import { Curso } from '../modelos/Curso';
import * as CursoService from './CursoService';

class CursoController {
    
    public async getCursos(): Promise<Curso[]> {
        try {
            const cursos = await CursoService.getCursos();
            return cursos;
        } catch (error) {
            console.error('Erro ao obter cursos:', error);
            throw new Error('Erro ao obter cursos');
        }
    }

    public async getCursoById(id: number): Promise<any> {
        try {
            const curso = await CursoService.getCursoById(id);
            return curso;
        } catch (error) {
            console.error('Erro ao obter curso por ID:', error);
            throw new Error('Curso não encontrado');
        }
    }

    public async criarCurso(novoCurso: any): Promise<any> {
        try {
            const cursoCriado = await CursoService.criarCurso(novoCurso);
            return cursoCriado;
        } catch (error) {
            console.error('Erro ao criar curso:', error);
            throw new Error('Erro ao criar curso');
        }
    }

    public async atualizarCurso(id: number, cursoAtualizado: any): Promise<any> {
        try {
            const curso = await CursoService.atualizarCurso(id, cursoAtualizado);
            return curso;
        } catch (error) {
            console.error('Erro ao atualizar curso:', error);
            throw new Error('Curso não encontrado');
        }
    }

    public async excluirCurso(id: number): Promise<any> {
        try {
            await CursoService.excluirCurso(id);
            return { mensagem: 'Curso excluído com sucesso' };
        } catch (error) {
            console.error('Erro ao excluir curso:', error);
            throw new Error('Curso não encontrado');
        }
    }
}

export default CursoController;
