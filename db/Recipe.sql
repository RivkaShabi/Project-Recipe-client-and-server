use ProjectRecipes
GO

/****** Object: Table ProjectRecipes Script Date: 12/10/2021 21:24:04 ******/

CREATE TABLE Recipe (
    [CodeRecipe]         INT           IDENTITY (1, 1) NOT NULL PRIMARY KEY ,
    [NameRecipe]         VARCHAR (20)  NULL,
    [CodeCategory]       INT           NULL FOREIGN KEY REFERENCES Category(codeCategory),
    [PreparationMinutes] INT           NULL,
    [LevelOfDifficulty]  INT           NULL,
    [DateAddRecipe]      DATE          NULL,
    [CodeUser]           INT           NULL FOREIGN KEY REFERENCES UserDetails(codeuser),
    [ImageRecipte]       VARCHAR (MAX) NULL,
	[CodeComponents] int null FOREIGN KEY REFERENCES components(codecomponents),
);