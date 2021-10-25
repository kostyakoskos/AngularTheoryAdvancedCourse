using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApi2.Models
{
    public class PaymentDetailsContext:DbContext
    {
        public PaymentDetailsContext(DbContextOptions<PaymentDetailsContext> options):base(options)
        {
            
        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
