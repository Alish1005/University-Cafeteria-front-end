namespace capston_backend.Models
{
    public class orders_items
    {
        public int id { get; set; }
        public int item_id { get; set; }
        public int quantity { get; set; }
        public string note { get; set; }
    }
}
