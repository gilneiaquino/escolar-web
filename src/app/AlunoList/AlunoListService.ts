// AlunoListService.ts

import axios from 'axios';
import { Aluno } from '../modelos/Aluno';




class AlunoListService {

    private readonly baseURL: string = 'http://localhost:8080/api/alunos';
    
    private customConfig = {
        headers: {
            'baseURL': this.baseURL,
            'Content-Type': 'application/json'
        }
    };

    public async listarAlunos(): Promise<Aluno[]> {
        try {
            const response = await axios.get<Aluno[]>(this.baseURL, this.customConfig);
            return response.data;
        } catch (error: any) {
            throw error;
        }
    }
}

export default AlunoListService;
