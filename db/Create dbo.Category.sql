use ProjectRecipes
GO


/****** Object: Table ProjectRecipes Script Date: 12/10/2021 21:26:52 ******/
create TABLE [dbo].[Category] (
    [CodeCategory] INT     IDENTITY (1, 1) NOT NULL  PRIMARY KEY,
    [NameCategory] VARCHAR (MAX) NULL,
    [RoutingIcon]  VARCHAR (MAX) NULL
);


