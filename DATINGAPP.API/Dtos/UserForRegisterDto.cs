using System.ComponentModel.DataAnnotations;

namespace DATINGAPP.API.Dtos {
    public class UserForRegisterDto {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength (50, MinimumLength = 4, ErrorMessage = "8-50 arasında karakter olmalıdır")]
        public string Password { get; set; }
    }
}