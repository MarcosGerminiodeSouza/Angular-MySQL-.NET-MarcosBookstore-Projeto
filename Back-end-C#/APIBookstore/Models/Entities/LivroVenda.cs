namespace APIBookstore.Models.Entities
{
    public class LivroVenda
    {
        public int Id { get; set; }
        public Livro Livro { get; set; }
        public Venda Venda { get; set; }
        public int Quantidade { get; set; }
        public decimal Valor { get; set; }
    }
}
