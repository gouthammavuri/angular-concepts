using System;

namespace dotnet.core.api 
{
    public class AppSettings 
    {
        public string Version { get; set; }
        public string Variable { get; set; }
        public string Value { get; set; }
        public Guid UserId { get; set; }
    }
}