USE [ProjectRecipes]
GO


alter TABLE [dbo].[Components] 
(
    [CodeComponent] INT    IDENTITY (1, 1) NOT NULL  PRIMARY KEY,
    [NameComponent] VARCHAR (20) NULL,
    [Quantity]      INT          NULL,
	[codeRecipte] int null      NULL FOREIGN KEY (CodeRecipe) REFERENCES [Recipe](CodeRecipe),
);


