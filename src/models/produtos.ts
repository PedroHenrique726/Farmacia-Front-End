import categorias from "./categorias";

export default interface produtos {
    id: number;
    nome: string;
    descricao: string;
    quantidade: number;
    laboratorio: string;
    preco: number;
    foto: string;
    categorias: categorias | null;
  }
