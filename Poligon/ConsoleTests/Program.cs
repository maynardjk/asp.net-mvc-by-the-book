
namespace ConsoleTests
{
    using System;
    using System.Collections.Generic;
    using System.Data.SqlClient;
    using System.Diagnostics;
    using System.Threading.Tasks;
    using Dapper;

    class Program
    {
        const string connectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;Initial Catalog=Tests;Integrated Security=True";

        static async Task Main(string[] args)
        {
            var sw = Stopwatch.StartNew();

            var taskNumbers = GetNumbersAsync();
            var taskLetters = GetLettersAsync();
            await Task.WhenAll(new Task[] { taskNumbers, taskLetters });
            var numbers = await taskNumbers;
            var letters = await taskLetters;

            Console.WriteLine("Time taken: " + sw.ElapsedMilliseconds + "\n");
            if (numbers != null)
            {
                foreach (var n in numbers)
                {
                    Console.WriteLine(n);
                }
            }

            Console.WriteLine("\n");

            if (letters != null)
            {
                foreach (var l in letters)
                {
                    Console.WriteLine(l);
                }
            }

            Console.Read();
        }

        private static async Task<IEnumerable<int>> GetNumbersAsync()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                var command = "Proc1";

                return await connection.QueryAsync<int>(command).ConfigureAwait(false);
            }
        }

        private static async Task<IEnumerable<string>> GetLettersAsync()
        {
            using (var connection = new SqlConnection(connectionString))
            {
                var command = "Proc2";

                return await connection.QueryAsync<string>(command).ConfigureAwait(false);
            }
        }
    }
}
