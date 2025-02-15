using Microsoft.AspNetCore.Mvc;

namespace Staffanstorps_Trafikskola.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }

    [Route("/Contact")]
    public IActionResult Contact()
    {
        return View();
    }

    [Route("/About")]
    public IActionResult About()
    {
        return View();
    }
}
