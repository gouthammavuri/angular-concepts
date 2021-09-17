using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using dotnet.core.api;

namespace dotnet.core.api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConfigurationController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<ConfigurationController> _logger;

        public ConfigurationController(ILogger<ConfigurationController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("getSearchAutoComplete/{userId}/{variableName}")]
        public IActionResult GetSearchAutoComplete(Guid userId, string variableName)
        {
            AppSettings appSettings = new AppSettings() 
            {
                UserId = userId, 
                Variable = variableName, 
                Value = JsonConvert.SerializeObject(Summaries)
            };
            return Ok(appSettings);
        }

        [HttpPost]
        [Route("setSearchAutoComplete")]
        public IActionResult SetSearchAutoComplete([FromBody]AppSettings appSettings)
        {
            return Ok(appSettings);
        }
    }
}
