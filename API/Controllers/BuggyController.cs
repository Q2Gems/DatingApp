using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;
        }


        //[1]
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {

            return "secret text";
        }


        //[2]
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            //localhost:5000/api/User:id
          
            var thing = _context.Users.Find(-1);

            if (thing == null) return NotFound();

            return Ok(thing);
        }

        //[3]
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
        
                var thing = _context.Users.Find(-1);
                var thingToReturn = thing.ToString();

                return thingToReturn;
            
            
        }

        //[4]
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("Bad Request");
        }



    }
}
