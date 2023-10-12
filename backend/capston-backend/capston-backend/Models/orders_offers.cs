namespace capston_backend.Models
{
    public class orders_offers
    {
        public int id { get; set; }
        public int order_id { get; set; }
        public order order { get; set; }
        public int offer_id { get; set; }
        public offer offer { get; set; }
        public int quantity { get; set; }
        public string note { get; set; }
    }
}
