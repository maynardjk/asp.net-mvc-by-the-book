using System;
using System.Collections.Generic;
using System.Text;

namespace PexForFun
{
    internal class Program
    {
        private static void Main(string[] args)
        {
            string[] valuesString = new[] { "", "a", "x", "aa", "ka", new string('a', 11) };
            int[][] valuesArrayOfInt = new[] { new int[] { }, new int[] { 0, 1 } };

            foreach (int[] i in valuesArrayOfInt)
            {
                Console.WriteLine(i.ToString() + " - " + Puzzle3(i));
            }
            Console.ReadKey();
        }

        //check if array is sorted
        public static bool Puzzle3(int[] a)
        {
            if (a.Length < 2) return true;

            List<int> l = new List<int>(a);
            l.Sort();
            int[] sorted = l.ToArray();

            for (int i = 0; i < a.Length; i++)
            {
                if (a[i] != sorted[i])
                {
                    return false;
                }
            }

            return true;
        }

        //make a plural form of a noun
        private static string Puzzle2(string s)
        {
            string[] vowels = new[] { "a", "e", "i", "o", "u", "y" };
            List<String> vowelsList = new List<string>(vowels);

            if (s.EndsWith("s") || s.EndsWith("h") || s.EndsWith("o"))
            {
                return s + "es";
            }
            else if (s.EndsWith("y"))
            {
                if (vowelsList.Contains(s.Substring(s.Length - 2, 1)))
                {
                    if (s.Substring(s.Length - 2, 1) == "y")
                    {
                        return s.Substring(0, s.Length - 1) + "ies";
                    }
                    else
                    {
                        return s + "s";
                    }
                }
                else
                {
                    return s.Substring(0, s.Length - 1) + "ies";
                }
            }
            else
            {
                return s + "s";
            }
        }

        private static string Puzzle1(string s)
        {
            string res = "";
            for (int i = 0; i < s.Length; i++)
            {
                char c = s[i];
                int ci = (int)c;
                ci += 3;
                ci = ci > 122 ? ci - 26 : ci;
                c = (char)ci;

                res += c;
            }
            return res;
        }

        private static int Puzzle(string s)
        {
            if (s.Length > 0)
            {
                string result = "";
                for (int i = 0; i < s.Length; i++)
                {
                    char c = s[i];

                    result += (int)c - 96;
                    result += "0";
                }
                int resInt;
                return Int32.TryParse(result.Substring(0, result.Length - 1), out resInt) ? resInt : Int32.MinValue;
            }
            return 0;
        }
    }
}