namespace capston_backend.Models
{
    public class order
    {
        public int id { get; set; }
        public string status { get; set; }
        public DateTime order_time { get; set; }
        public double? discount { get; set;}
        public string Del_Room { get; set; } = "";
       /* public double total_price()
        {

        }*/
    }
}
