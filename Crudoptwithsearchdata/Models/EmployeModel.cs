using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Crudoptwithsearchdata.Models
{
    public class EmployeModel
    {
        public int Eid { get; set; }
        public string Ename { get; set; }
        public string Emiddlename { get; set; }
        public string Elastname { get; set; }
        public int StateId { get; set; }
        public bool IsActive { get; set; }
        public DateTime Date { get; set; }
    }
}