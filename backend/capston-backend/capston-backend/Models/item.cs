using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace capston_backend.Models
{
    public class item
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string photo { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public int quantity { get; set; }
        [Required]
        public int calories { get; set; }
        public int orders_number { get; set; } = 0;
        [Required]
        public int section_id { get; set; }
        public section section { get; set; }
        [Required]
        public double price { get; set;}
        public List<items_offers> items_offers { get; set;}
    }
}
