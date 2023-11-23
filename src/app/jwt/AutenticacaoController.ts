import UsuarioController from "../Usuario/UsuarioController";

class AutenticacaoController {
  static getToken() {
    return localStorage.getItem("token");
  }

  static setToken(token: string) {
    localStorage.setItem("token", token);
  }

  static removeToken() {
    localStorage.removeItem("token");
  }

  static isAuthenticated() {
    const token = this.getToken();
    // Verifica se o token existe e se está válido
    return !!token; // Adicione lógica adicional de validação do token aqui, se necessário
  }
}

export default AutenticacaoController;


