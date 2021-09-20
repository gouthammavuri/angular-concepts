using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dotnet.core.api;

namespace dotnet.core.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SampleController : ControllerBase
    {
        [Route("{databaseId}/revenue/{userId}")]
        [HttpPut]
        public IActionResult ExHttpPut(Guid databaseId, Guid userId, [FromBody] RevenueDetail revenueDetail) 
        {
            return Ok(revenueDetail);
        }
    }
}