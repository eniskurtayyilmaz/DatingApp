using System;
using System.Net;
using Microsoft.AspNetCore.Http;

namespace DATINGAPP.API.Helpers
{
    public static class HttpResponse_AddApplicationError_Extension
    {
        public static void AddApplicationError(this HttpResponse context, string message)
        {
            context.Headers.Add("Access-Control-Allow-Origin", "*");
            context.Headers.Add("Access-Control-Expose-Headers", "Application-Error");
            context.Headers.Add("Application-Error", message.ConvertToBase64());
        }
    }

    public static class String_ToBase64_Extension
    {
        public static string ConvertToBase64(this string value)
        {
            byte[] encodedBytes = System.Text.Encoding.Unicode.GetBytes(value);
            string encodedTxt = Convert.ToBase64String(encodedBytes);
            return encodedTxt;
        }
    }
}