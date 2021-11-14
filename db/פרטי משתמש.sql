USE [ProjectRecipes]
GO

/****** Object: Table [dbo].[UserDetails] Script Date: 31/10/2021 22:39:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

create TABLE UserDetails (
    [CodeUser]     INT     PRIMARY KEY   IDENTITY (1, 1) NOT NULL,
    [NameUser]     VARCHAR (30)  NULL,
    [AddressUser]  VARCHAR (MAX) NULL,
    [EmailUser]    VARCHAR (MAX) NULL,
    [PasswordUser] VARCHAR (MAX) NULL
);


