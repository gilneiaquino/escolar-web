import { Aluno } from '../modelos/Aluno';
import AlunoListService from './AlunoListService';  

class AlunoListController {

    private alunoListService: AlunoListService;
    
    constructor() {
        this.alunoListService = new AlunoListService();
    }

    public async listarAlunos(): Promise<Aluno[]> {
        try {
            const alunos = await this.alunoListService.listarAlunos();
            return alunos;
        } catch (error) {
            throw new Error('Erro ao listar alunos');
        }
    }

}

export default AlunoListController;