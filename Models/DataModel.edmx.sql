-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 05/03/2018 08:48:33
-- Generated from EDMX file: E:\TFS_3\Trunk\Casanueva\Models\DataModel.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [CasaNuevaDB];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_DimensionesTipoAmbiente]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Dimensiones] DROP CONSTRAINT [FK_DimensionesTipoAmbiente];
GO
IF OBJECT_ID(N'[dbo].[FK_ImagenesPropiedades]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Imagenes] DROP CONSTRAINT [FK_ImagenesPropiedades];
GO
IF OBJECT_ID(N'[dbo].[FK_PropiedadesDimensiones]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Dimensiones] DROP CONSTRAINT [FK_PropiedadesDimensiones];
GO
IF OBJECT_ID(N'[dbo].[FK_PropiedadesServicios]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Propiedades] DROP CONSTRAINT [FK_PropiedadesServicios];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Ciudad]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Ciudad];
GO
IF OBJECT_ID(N'[dbo].[Dimensiones]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Dimensiones];
GO
IF OBJECT_ID(N'[dbo].[EstadosAviso]', 'U') IS NOT NULL
    DROP TABLE [dbo].[EstadosAviso];
GO
IF OBJECT_ID(N'[dbo].[Imagenes]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Imagenes];
GO
IF OBJECT_ID(N'[dbo].[Moneda]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Moneda];
GO
IF OBJECT_ID(N'[dbo].[Orientacion]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Orientacion];
GO
IF OBJECT_ID(N'[dbo].[Propiedades]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Propiedades];
GO
IF OBJECT_ID(N'[dbo].[Servicios]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Servicios];
GO
IF OBJECT_ID(N'[dbo].[TipoAmbiente]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TipoAmbiente];
GO
IF OBJECT_ID(N'[dbo].[TipoAviso]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TipoAviso];
GO
IF OBJECT_ID(N'[dbo].[TipoPropiedad]', 'U') IS NOT NULL
    DROP TABLE [dbo].[TipoPropiedad];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'Ciudad'
CREATE TABLE [dbo].[Ciudad] (
    [IdCiudad] int IDENTITY(1,1) NOT NULL,
    [NombreCiudad] varchar(50)  NOT NULL,
    [CodigoPostal] int  NULL
);
GO

-- Creating table 'Dimensiones'
CREATE TABLE [dbo].[Dimensiones] (
    [IdDimension] int IDENTITY(1,1) NOT NULL,
    [IdPropiedad] int  NOT NULL,
    [Descripcion] varchar(50)  NOT NULL,
    [IdTipoAmbiente] int  NOT NULL,
    [Largo] decimal(18,2)  NULL,
    [Ancho] decimal(18,2)  NULL,
    [Alto] decimal(18,2)  NULL
);
GO

-- Creating table 'EstadosAviso'
CREATE TABLE [dbo].[EstadosAviso] (
    [IdEstado] int IDENTITY(1,1) NOT NULL,
    [Descripcion] varchar(50)  NOT NULL
);
GO

-- Creating table 'Imagenes'
CREATE TABLE [dbo].[Imagenes] (
    [IdImagen] int IDENTITY(1,1) NOT NULL,
    [IdPropiedad] int  NOT NULL,
    [ServerPath] varchar(255)  NOT NULL,
    [EsPrincipal] bit  NULL
);
GO

-- Creating table 'Moneda'
CREATE TABLE [dbo].[Moneda] (
    [IdMoneda] int IDENTITY(1,1) NOT NULL,
    [Descripcion] varchar(10)  NOT NULL
);
GO

-- Creating table 'Orientacion'
CREATE TABLE [dbo].[Orientacion] (
    [IdOrientacion] int IDENTITY(1,1) NOT NULL,
    [Descripcion] varchar(50)  NOT NULL
);
GO

-- Creating table 'Propiedades'
CREATE TABLE [dbo].[Propiedades] (
    [IdPropiedad] int IDENTITY(1,1) NOT NULL,
    [IdServicio] int  NOT NULL,
    [Titulo] varchar(50)  NOT NULL,
    [Precio] decimal(18,2)  NOT NULL,
    [Comentarios] varchar(500)  NULL,
    [EsDestacado] bit  NULL,
    [FechaIngreso] datetime  NULL,
    [FechaActualizacion] datetime  NULL,
    [IdEstadoAviso] int  NOT NULL,
    [IdTipoAviso] int  NOT NULL,
    [IdMoneda] int  NULL,
    [MontoExpensas] decimal(18,2)  NULL,
    [MetrosTotales] decimal(18,2)  NULL,
    [MetrosCubiertos] decimal(18,2)  NULL,
    [CantidadAmbientes] int  NULL,
    [CantidadDormitorios] int  NULL,
    [CantidadSanitarios] int  NULL,
    [CantidadPisos] int  NULL,
    [CantidadPorPiso] int  NULL,
    [Antiguedad] int  NULL,
    [CantidadAscensores] int  NULL,
    [CantidadCocheras] int  NULL,
    [AptoProfesional] bit  NULL,
    [Balcon] bit  NULL,
    [Calle] varchar(50)  NULL,
    [Numero] int  NULL,
    [EntreCalles] varchar(50)  NULL,
    [Piso] int  NULL,
    [Departamento] varchar(5)  NULL,
    [IdOrientacion] int  NULL,
    [IdCiudad] int  NULL,
    [LatitudLongitud] varchar(100)  NULL,
    [IdMonedaExpensas] int  NULL,
    [CodigoPropiedad] varchar(50)  NULL,
    [URLVideo] varchar(255)  NULL,
    [IdTipoPropiedad] int  NULL
);
GO

-- Creating table 'Servicios'
CREATE TABLE [dbo].[Servicios] (
    [IdServicio] int IDENTITY(1,1) NOT NULL,
    [Agua] bit  NOT NULL,
    [Gas] bit  NOT NULL,
    [Cloaca] bit  NOT NULL,
    [Caldera] bit  NOT NULL,
    [AireAcondicionado] bit  NOT NULL,
    [ServicioSeguridad] bit  NOT NULL,
    [Telefono] bit  NOT NULL,
    [Internet] bit  NOT NULL,
    [Luz] bit  NOT NULL,
    [PorteroElectrico] bit  NOT NULL,
    [TV] bit  NOT NULL,
    [Termotanque] bit  NOT NULL
);
GO

-- Creating table 'TipoAmbiente'
CREATE TABLE [dbo].[TipoAmbiente] (
    [IdTipoAmbiente] int IDENTITY(1,1) NOT NULL,
    [Descripcion] varchar(50)  NOT NULL
);
GO

-- Creating table 'TipoAviso'
CREATE TABLE [dbo].[TipoAviso] (
    [IdTipoAviso] int IDENTITY(1,1) NOT NULL,
    [Descripcion] varchar(50)  NOT NULL
);
GO

-- Creating table 'TipoPropiedad'
CREATE TABLE [dbo].[TipoPropiedad] (
    [IdTipoPropiedad] int IDENTITY(1,1) NOT NULL,
    [Descripcion] varchar(50)  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [IdCiudad] in table 'Ciudad'
ALTER TABLE [dbo].[Ciudad]
ADD CONSTRAINT [PK_Ciudad]
    PRIMARY KEY CLUSTERED ([IdCiudad] ASC);
GO

-- Creating primary key on [IdDimension], [IdPropiedad] in table 'Dimensiones'
ALTER TABLE [dbo].[Dimensiones]
ADD CONSTRAINT [PK_Dimensiones]
    PRIMARY KEY CLUSTERED ([IdDimension], [IdPropiedad] ASC);
GO

-- Creating primary key on [IdEstado] in table 'EstadosAviso'
ALTER TABLE [dbo].[EstadosAviso]
ADD CONSTRAINT [PK_EstadosAviso]
    PRIMARY KEY CLUSTERED ([IdEstado] ASC);
GO

-- Creating primary key on [IdImagen], [IdPropiedad] in table 'Imagenes'
ALTER TABLE [dbo].[Imagenes]
ADD CONSTRAINT [PK_Imagenes]
    PRIMARY KEY CLUSTERED ([IdImagen], [IdPropiedad] ASC);
GO

-- Creating primary key on [IdMoneda] in table 'Moneda'
ALTER TABLE [dbo].[Moneda]
ADD CONSTRAINT [PK_Moneda]
    PRIMARY KEY CLUSTERED ([IdMoneda] ASC);
GO

-- Creating primary key on [IdOrientacion] in table 'Orientacion'
ALTER TABLE [dbo].[Orientacion]
ADD CONSTRAINT [PK_Orientacion]
    PRIMARY KEY CLUSTERED ([IdOrientacion] ASC);
GO

-- Creating primary key on [IdPropiedad] in table 'Propiedades'
ALTER TABLE [dbo].[Propiedades]
ADD CONSTRAINT [PK_Propiedades]
    PRIMARY KEY CLUSTERED ([IdPropiedad] ASC);
GO

-- Creating primary key on [IdServicio] in table 'Servicios'
ALTER TABLE [dbo].[Servicios]
ADD CONSTRAINT [PK_Servicios]
    PRIMARY KEY CLUSTERED ([IdServicio] ASC);
GO

-- Creating primary key on [IdTipoAmbiente] in table 'TipoAmbiente'
ALTER TABLE [dbo].[TipoAmbiente]
ADD CONSTRAINT [PK_TipoAmbiente]
    PRIMARY KEY CLUSTERED ([IdTipoAmbiente] ASC);
GO

-- Creating primary key on [IdTipoAviso] in table 'TipoAviso'
ALTER TABLE [dbo].[TipoAviso]
ADD CONSTRAINT [PK_TipoAviso]
    PRIMARY KEY CLUSTERED ([IdTipoAviso] ASC);
GO

-- Creating primary key on [IdTipoPropiedad] in table 'TipoPropiedad'
ALTER TABLE [dbo].[TipoPropiedad]
ADD CONSTRAINT [PK_TipoPropiedad]
    PRIMARY KEY CLUSTERED ([IdTipoPropiedad] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [IdTipoAmbiente] in table 'Dimensiones'
ALTER TABLE [dbo].[Dimensiones]
ADD CONSTRAINT [FK_DimensionesTipoAmbiente]
    FOREIGN KEY ([IdTipoAmbiente])
    REFERENCES [dbo].[TipoAmbiente]
        ([IdTipoAmbiente])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_DimensionesTipoAmbiente'
CREATE INDEX [IX_FK_DimensionesTipoAmbiente]
ON [dbo].[Dimensiones]
    ([IdTipoAmbiente]);
GO

-- Creating foreign key on [IdPropiedad] in table 'Dimensiones'
ALTER TABLE [dbo].[Dimensiones]
ADD CONSTRAINT [FK_PropiedadesDimensiones]
    FOREIGN KEY ([IdPropiedad])
    REFERENCES [dbo].[Propiedades]
        ([IdPropiedad])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PropiedadesDimensiones'
CREATE INDEX [IX_FK_PropiedadesDimensiones]
ON [dbo].[Dimensiones]
    ([IdPropiedad]);
GO

-- Creating foreign key on [IdPropiedad] in table 'Imagenes'
ALTER TABLE [dbo].[Imagenes]
ADD CONSTRAINT [FK_ImagenesPropiedades]
    FOREIGN KEY ([IdPropiedad])
    REFERENCES [dbo].[Propiedades]
        ([IdPropiedad])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ImagenesPropiedades'
CREATE INDEX [IX_FK_ImagenesPropiedades]
ON [dbo].[Imagenes]
    ([IdPropiedad]);
GO

-- Creating foreign key on [IdServicio] in table 'Propiedades'
ALTER TABLE [dbo].[Propiedades]
ADD CONSTRAINT [FK_PropiedadesServicios]
    FOREIGN KEY ([IdServicio])
    REFERENCES [dbo].[Servicios]
        ([IdServicio])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_PropiedadesServicios'
CREATE INDEX [IX_FK_PropiedadesServicios]
ON [dbo].[Propiedades]
    ([IdServicio]);
GO

-- Creating foreign key on [Ciudad_IdCiudad] in table 'Propiedades'
ALTER TABLE [dbo].[Propiedades]
ADD CONSTRAINT [FK_CiudadPropiedades]
    FOREIGN KEY ([IdCiudad])
    REFERENCES [dbo].[Ciudad]
        ([IdCiudad])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_CiudadPropiedades'
CREATE INDEX [IX_FK_CiudadPropiedades]
ON [dbo].[Propiedades]
    ([IdCiudad]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------