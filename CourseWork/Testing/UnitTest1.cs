using Api.Models.Users.Commands;
using NUnit.Framework;

namespace Testing;

[TestFixture]
public class TestsUserValidation
{
    [TestCase("admin", "student")] // Проверка регулярного выражения
    [TestCase("admin", "admin")] // Удовлетворительный
    [TestCase("admin", "ппппппппппппппппппппппппппппппппппппппппппппппппппп")] // Проверка длины пароля (не больше 50 символов)
    [TestCase("ппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппппп", "admin")] // Проверка длины логина (не больше 100 символов) 
    public async Task ValidationUser_Test(string login, string password)
    {
        Assert.That(await Api.Controllers.UserController.UserValidation(new LoginCommand()
            { Login = login, Password = password }), Is.True);
    }
}