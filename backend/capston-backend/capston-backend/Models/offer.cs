namespace capston_backend.Models
{
    public class offer
    {
        public int id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string description { get; set; }
        public double price { get; set; }
        public int orders_number { get; set; }
        public List<items_offers> items_offers { get; set; }

    }
}
