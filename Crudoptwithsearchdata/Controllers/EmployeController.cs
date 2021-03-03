using Crudoptwithsearchdata.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Crudoptwithsearchdata.Controllers
{
    public class EmployeController : Controller
    {
        //
        // GET: /Employe/
        public ActionResult Index()
        {
            return View();
        }
       public JsonResult GetAllstate()
        {
           using(DBEntities dben =new DBEntities())
           {
               List<states2> objstate = dben.states2.ToList();
               List<statemodel> mode = new List<statemodel>();
               foreach(var s in objstate)
               {
                   statemodel model = new statemodel();
                   model.StateId = s.StateId;
                   model.StateName = s.StateName;
                   mode.Add(model);
               }
               return Json(mode, JsonRequestBehavior.AllowGet);
           }
        }
       public JsonResult GetAllData()
       {
            using(DBEntities dben=new DBEntities())
            {
                List<Employe> emp = dben.Employes.ToList();
                List<EmployeModel> empmode = new List<EmployeModel>();
                foreach(var e in emp)
                {
                    EmployeModel emodel = new EmployeModel();
                    emodel.Eid = e.Eid;
                    emodel.Ename = e.Ename;
                    emodel.Emiddlename = e.Emiddlename;
                    emodel.Elastname = e.Elastname;
                    emodel.StateId = e.states2.StateId;
                    emodel.IsActive = e.IsActive;
                    emodel.Date = e.Date;
                    empmode.Add(emodel);
                }
                return Json(empmode, JsonRequestBehavior.AllowGet);

            }
       }
        public JsonResult insertemp(Employe empl)
        {
            using(DBEntities dben=new DBEntities())
            {
                dben.Employes.Add(empl);
                dben.SaveChanges();
            }
            return Json(empl);
        }
        public JsonResult serachemp()
        {
            DBEntities dben = new DBEntities();
            List<Employe> srchemp = dben.Employes.ToList();
            return Json(srchemp, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Deleteemploye(int Eid)
        {
            using (DBEntities dben = new DBEntities())
            {
                Employe Empl = dben.Employes.Where(e => e.Eid == Eid).FirstOrDefault();
                dben.Employes.Remove(Empl);
                dben.SaveChanges();
            }
            return Json(Eid, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Updateemployee(Employe Emp)
        {
            using (DBEntities dben = new DBEntities())
            {
                Employe emp = dben.Employes.Where(x => x.Eid == Emp.Eid).FirstOrDefault();
                emp.Ename = Emp.Ename;
                emp.Emiddlename = Emp.Emiddlename;
                emp.Elastname = Emp.Elastname;
                emp.StateId = Emp.StateId;
                emp.IsActive = Emp.IsActive;
                emp.Date = Emp.Date;
            }
            return Json(Emp, JsonRequestBehavior.AllowGet);
        }

	}
}