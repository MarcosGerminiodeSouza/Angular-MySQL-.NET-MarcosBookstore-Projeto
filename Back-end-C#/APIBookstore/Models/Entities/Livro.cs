using System.Data.Common;

namespace APIBookstore.Models.Entities
{
    public class Livro
    {
        public int  Id { get; set; }
        public Autor Autor { get; set; }
        public Editora Editora { get; set; }
        public Categoria Categoria { get; set; }
        public string Titulo { get; set; }
        public string Temporada { get; set; }
        public int Ano { get; set; }
        public decimal Valor { get; set; }
        public string Imagem { get; set; }
        public int Quantidade { get; set; }
        public string Lancamento { get; set; }
    }
}
