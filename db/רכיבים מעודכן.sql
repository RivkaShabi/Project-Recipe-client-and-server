USE [ProjectRecipes]
GO

/****** Object: Table [dbo].[Components] Script Date: 31/10/2021 22:32:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Components] (
    [CodeComponent] INT    PRIMARY KEY   IDENTITY (1, 1) NOT NULL,
    [NameComponent] VARCHAR (30) NULL,
    [Quantity]      INT          NULL,
	[CodeRecipe]    INT FOREIGN KEY (CodeRecipe) REFERENCES  Recipe([CodeRecipe])
);





