using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectRecipes.Models
{
    public class DB
    {

        public static List<Category> listCategory;
        public static List<User> listUser;
        public static List<Recipe> listRecipe;



        static DB()
        {
            listCategory = new List<Category>();
            listCategory.Add(new Category() { CodeCategory = 1, NameCategory = "עוגות", RoutingIcon = "918183.png" });
            listCategory.Add(new Category() { CodeCategory = 2, NameCategory = "מאפים", RoutingIcon = "2453286.png" });
            listCategory.Add(new Category() { CodeCategory = 3, NameCategory = "סלטים", RoutingIcon = "2153737.png" });
            listCategory.Add(new Category() { CodeCategory = 4, NameCategory = "מרקים", RoutingIcon = "2387000.png" });
            listCategory.Add(new Category() { CodeCategory = 5, NameCategory = "דגים", RoutingIcon = "884640.png" });
            listCategory.Add(new Category() { CodeCategory = 6, NameCategory = "קינוחים", RoutingIcon = "427228.png" });
            listCategory.Add(new Category() { CodeCategory = 7, NameCategory = "מתכוני חג", RoutingIcon = "סופגניה.jpg" });



            listUser = new List<User>();
   
            listUser.Add(new User()
            {
                CodeUser = 1,
                NameUser = "שרה",
                AddressUser = "dan 30 tel aviv",
                EmailUser = "rivka@gmail.com",
                Password = "10000"
            });
            listUser.Add(new User()
            {
                CodeUser = 2,
                NameUser = "רבקה",
                AddressUser = "gad 30 Beni Brak",
                EmailUser = "Ariel@gmail.com",
                Password = "11111"
            });
            listRecipe = new List<Recipe>();

       
            listRecipe.Add(
             new Recipe()
             {
                 CodeRecipe = 2,
                 NameRecipe = "פיצה",
                 CodeCategory = 2,
                 PreparationMinutes = 175,
                 LevelOfDifficulty = 3,
                 AddDateRecipe = new DateTime(17 / 12 / 2020),
                 CodeUser = 2,
                 Image = "g8.jpg",
                 DoDisplay = true,
                 ListComponent = new List<string>() { "שמן", "סוכר", "מלח", "רסק", "גבינה צהובה", "זיתים" },
                 ListPreparation = new List<string>() { "לשפוך את החומרים לקערה", "לערבב חזק" }
             });
            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 14,
                NameRecipe = "עוגת קפה",
                CodeCategory = 1,
                PreparationMinutes = 175,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "david-holifield-kPxsqUGneXQ-unsplash.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שמן", "סוכר", "מלח", "רסק", "גבינה צהובה", "זיתים" },
                ListPreparation = new List<string>() { "לשפוך את החומרים לקערה", "לערבב חזק" }
            });

            listRecipe.Add(
        new Recipe()
        {
            CodeRecipe = 1,
            NameRecipe = "עוגת קומות חלומית",
            CodeCategory = 1,
            PreparationMinutes = 45,
            LevelOfDifficulty = 2,
            AddDateRecipe = new DateTime(01 / 12 / 2015),
            CodeUser =1,
            Image = "100.jpg",
            DoDisplay = true,
            ListComponent = new List<string>() { "oil", "sugar" },
            ListPreparation = new List<string>() { "לשפוך את החומרים לקערה" }
        });


            listRecipe.Add(
            new Recipe()
            {
                CodeRecipe = 3,
                NameRecipe = "סלט אבוקדו",
                CodeCategory = 3,
                PreparationMinutes = 200,
                LevelOfDifficulty = 1,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "919.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { " 2 אבוקדו רכים", "מיץ מחצי לימון", "1 / 4 בצל קצוץ", "מלח ופלפל לפי הטעם", "שדרוגים: 2 כפות גבינת שמנת" },
                ListPreparation = new List<string>() { " חוצים את האבוקדו, נפטרים מהגלעין וקוליפם את הקליפה", " מעבירים את האבוקדו לקערה ומועכים היטב בעזרת מזלג.",
                    "מוסיפים לימון, בצל, תבלינים ותוספות משדרגות ומערבבים היטב." ,
 "זה הכל, הסלט מוכן, בתיאבון"}
            });
            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 11,
                NameRecipe = "סלט גינה",
                CodeCategory = 3,
                PreparationMinutes = 26,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "salad-2150548_1280-2.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 12,
                NameRecipe = "פנקייק",
                CodeCategory = 2,
                PreparationMinutes = 56,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "chad-montano-eeqbbemH9-c-unsplash.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 13,
                NameRecipe = "טורטית בשר",
                CodeCategory = 7,
                PreparationMinutes = 56,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "DSC_0142-עותק.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
      
       
            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 15,
                NameRecipe = "עוגת שוניל",
                CodeCategory = 1,
                PreparationMinutes = 175,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
            listRecipe.Add(
        new Recipe()
        {
            CodeRecipe = 4,
            NameRecipe = "עוגת גבינה",
            CodeCategory = 1,
            PreparationMinutes = 30,
            LevelOfDifficulty = 3,
            AddDateRecipe = new DateTime(15 / 12 / 2020),
            CodeUser = 2,
            Image = "9.jpg",
            DoDisplay = true,
            ListComponent = new List<string>() { "גבינה לבנה 9% שומן", "גבינת שמנת 25 % שומן", "200 גרם(1 כוס) סוכר", "1 כפית תמצית וניל", "5 ביצים L", "זיתים" },
            ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
        });
            listRecipe.Add(
new Recipe()
{
    CodeRecipe = 5,
    NameRecipe = "עוגת שוקולד",
    CodeCategory = 1,
    PreparationMinutes = 70,
    LevelOfDifficulty = 4,
    AddDateRecipe = new DateTime(17 / 12 / 2020),
    CodeUser = 2,
    Image = "s.png",
    DoDisplay = true,
    ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
    ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
});

            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 6,
                NameRecipe = "לחמניות כוסמין",
                CodeCategory = 2,
                PreparationMinutes = 65,
                LevelOfDifficulty = 1,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "23.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 7,
                NameRecipe = "דג סלומון מעושן",
                CodeCategory = 5,
                PreparationMinutes = 65,
                LevelOfDifficulty = 1,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "עותק.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
            listRecipe.Add(new Recipe()
            {
                CodeRecipe =15,
                NameRecipe = "מרק אספרגוס",
                CodeCategory = 4,
                PreparationMinutes = 175,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "5.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
           
            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 16,
                NameRecipe = "עוגיות שוקוציפיס",
                CodeCategory = 2,
                PreparationMinutes = 175,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "amirali-mirhashemian-tSHyiRtOvcw-unsplash.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });

            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 9,
                NameRecipe = "גלידת בלוברי",
                CodeCategory = 6,
                PreparationMinutes = 175,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "גלידה.jpg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });

            listRecipe.Add(new Recipe()
            {
                CodeRecipe = 10,
                NameRecipe = "עוגת שכבות הורסת",
                CodeCategory = 1,
                PreparationMinutes = 86,
                LevelOfDifficulty = 3,
                AddDateRecipe = new DateTime(17 / 12 / 2020),
                CodeUser = 2,
                Image = "pexels-photo-1028711.jpeg",
                DoDisplay = true,
                ListComponent = new List<string>() { "שוקולית", " 1 כוס סוכר", "אבקת אפיה", "1 כפית תמצית וניל", "5 ביצים L" },
                ListPreparation = new List<string>() { "מחממים תנור ל-200 מעלות", "מחממים תנור ל-200 מעלות", "מוסיפים קורנפלור", "מוסיפים את הביצים", "אופים 10 דקות ב-200 מעלות", " מנמיכים את חום התנור ל-150 מעלות " }
            });
          
        }

    
    }
}